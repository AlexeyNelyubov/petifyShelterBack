const Pet = require('../models/PetModel.js')

const PetId = async(req, res) => {
    // console.log('cookie', req.cookies)
    try{
        const pets = await Pet.find({})
        // const pets = require('../Pets.json');
        // console.log(pets);
        // console.log(req.params.id)
        let pet = 'pet not found';
        for (let item of pets) {
            // console.log(item.id)
            if (item.id === req.params.id) {
                pet = item;
            }
        }
        res.status(200).json(pet);
    }
    catch(error) {
        console.error(error.message);
        res.status(500).json(error.message) 
    }
}

module.exports = {PetId}