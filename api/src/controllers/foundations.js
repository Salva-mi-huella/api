const { Foundation, Pet } = require("../db");
const bcrypt = require('bcrypt');

const postFoundation = async (req, res) => {
  let { name, location, telephone_number, password, email, instagram, website, images } = req.body;

	let passwordHash = bcrypt.hashSync(password, 10);

	password = passwordHash;

	try {
		const nameExists = name ? await Foundation.findOne({ where: { name }}) : null;
		if (!name || !location || !telephone_number || !password) {
			return res.status(400).json({ message: "Missing data"});
		}
		else if (!nameExists) {
			const foundation = await Foundation.create({ name, location, telephone_number, password, email, instagram, website, images });
			return res.json(foundation);
		}
		
		return res.status(400).json({ message: "Name already exists" });
	} 
	catch (error) {
		res.status(404).json({ message: error.message });
	}
}

const getFoundations = async (req, res) => {
	const { name } = req.query;

	try {
		let foundations = await Foundation.findAll({
			include: {
				model: Pet,
				attributes: ["id", "name"]
			}
		});

		if (name) {
			const foundationsByName = foundations.filter(f => f.name.toLowerCase().includes(name.toLowerCase()));
			
			if (foundationsByName.length > 0) {
				return res.json(foundationsByName);
			}
			return res.status(400).json({ message: "Foundation not found" });
		}

		return res.json(foundations.map(foundation => foundation.dataValues));
	}
	catch (error) {
		res.status(404).json({ message: error.message });
	}
}


const deleteFoundation = async (req, res) => {
	let { id } = req.params;
	try {
		let response = await Foundation.destroy({
            where: {id}
        })
        res.json({message: `${response} foundation has been removed`})
	} catch (error) {
		res.status(404).json("Foundation not removed")
	}
}

module.exports = {
	postFoundation,
    getFoundations,
	deleteFoundation
}