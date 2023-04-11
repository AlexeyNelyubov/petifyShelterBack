const mongoose = require('mongoose')
const Pet = require('../models/PetModel.js');

const listPets = async(req, res) => {
        try {
            console.log(req)
            const pets = await Pet.find({})
            // const pets = require('../Pets.json')
            // console.log(pets)
            // for(let pet of pets) {
            //     const {avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter } = pet;
            //     await Pet.create({avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter });
            // }
            res.status(200).json(pets)
        }
        catch(error) {
            console.error(error.message);
            res.status(500).json(error.message)
        }
}

module.exports = { listPets }