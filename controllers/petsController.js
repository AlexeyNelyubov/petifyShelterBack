const mongoose = require('mongoose')
const Pet = require('../models/PetModel.js');
const Pet2 = require('../models/PetModel2.js');

const listPets = async(req, res) => {
        try {
            const pets = await Pet.find({})
            // const pets = await Pet2.find({})
            // const pets = require('../Petscopy.json')
            // for(let pet of pets) {
            //     const {avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter } = pet;
            //     await Pet2.create({avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter });
            // }
            res.status(200).json(pets)
        }
        catch(error) {
            console.error(error.message);
            res.status(500).json(error.message)
        }
}

module.exports = { listPets }