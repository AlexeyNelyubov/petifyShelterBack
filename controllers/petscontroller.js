const listPets = async(req, res) => {
    try {
        const pets = await require('../Pets.json')
        res.status(200).json(pets)
    }
    catch(error) {
        console.error(error);
        res.status(500).json([])
    }
}

module.exports = { listPets }