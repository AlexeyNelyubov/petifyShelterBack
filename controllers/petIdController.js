const Pet = require('../models/PetModel.js')
const Pet2 = require('../models/PetModel2.js')

const PetId = async(req, res) => {
    try{
        const pets = await Pet.find({})
        // const pets = await Pet2.find({})
        let pet = 'pet not found';
        for (let item of pets) {
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