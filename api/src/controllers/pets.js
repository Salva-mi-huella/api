const { Foundation, Pet } = require('../db');

const getPetsFoundation = async (req, res) => {
    try {
        let response = await Pet.findAll({
            include:{
                model: Foundation,
                attributes: ['name', 'id'],
                through: {
                    attributes: [],
                }
            }
        })
        res.send(response)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports={
    getPetsFoundation
}