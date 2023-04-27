const mongoose = require('mongoose');
const fs = require('fs')
const Pet = require('../models/PetModel2.js')

const newPet = async(req, res)=> {
    try {
        console.log(JSON.parse(req.body.newPet))

    const file = req.files.avatar;
    // const newFileName = encodeURI(Date.now()+'-'+ file.name);
    const newFileName = Date.now()+'-'+ file.name;
    // // await fs.promises.readFile(`${__dirname}/img/img.jpg`, file.data);
    await fs.promises.writeFile(`img/${newFileName}`, file.data);
    const avatar = `https://petify-shelter-back.onrender.com/img/${newFileName}`;
    const {type, gender, name} = JSON.parse(req.body.newPet);
    const pet = {avatar, type, gender, name};
    // const {type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter } = req.body.newPet;
    // const pet = await Pet.create({avatar, type, gender, name, age, breeds, weight, height, sterilized, vaccinated, features, bio, shelter });

    // file.mv(`img/${newFileName}`, (error)=> {
    //     if(error) {
    //         console.error(error.message);
    //         res.status(500).json(error.message)
    //     }
    // });

    res.status(200).json(pet)

    } catch(error) {
        console.error(error.message)
        res.status(500).json(error.message)
    }
    
};

module.exports = { newPet }