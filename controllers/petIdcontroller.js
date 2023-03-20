const PetId = (req, res) => {
    
    try{
        const pets = require('../Pets.json');
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