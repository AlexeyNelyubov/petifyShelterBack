const mongoose = require('mongoose');
const fs = require('fs')
const Pet = require('../models/PetModel.js')

const newPet = async(req, res)=> {
    try {
        console.log(JSON.parse(req.body.newPet))
        // const pets = require('../Pets.json')
        // // console.log(pets);
        // for (let pet of pets) {
        //     const {avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter } = pet;
        //      await Pet.create({avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter });
        // }
    //     const {avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter } = req.body;
    //     const pet = await Pet.create({avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter });
    // 
    // const file = req.files.avatar;
    // // const newFileName = encodeURI(Date.now()+'-'+ file.name);
    // const newFileName = Date.now()+'-'+ file.name;
    // // await fs.promises.readFile(`${__dirname}/img/img.jpg`, file.data);
    // // await fs.promises.writeFile(`img/${newFileName}`, file.data);
    // file.mv(`img/${newFileName}`, (error)=> {
    //     if(error) {
    //         console.error(error.message);
    //         res.status(500).json(error.message)
    //     }
    // });
    // console.log(req.files.avatar)
    // console.log( newFileName)
    res.status(200).json(req.body)

    } catch(error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
    
};

module.exports = { newPet }