const listPets = (req, res) => {
        try {
            const pets = require('../Pets.json')
            res.status(200).json(pets)
        }
        catch(error) {
            console.error(error);
            res.status(500).json([])
        }
}

module.exports = { listPets }