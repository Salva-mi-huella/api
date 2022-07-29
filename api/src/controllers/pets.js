const { Pet, Foundation } = require("../db");

const postPet = async (req, res) => {
	const { name, age, gender, description, foundation } = req.body;
	
	try {
		if (!name || !age || !gender || !description) {
			return res.status(400).json({ message: "Missing data" });
		}

		const petExists = await Pet.findOne({ where: { description }});
		
		if (!petExists) {
			const pet = await Pet.create(req.body);
			pet.setFoundation(foundation);
			return res.json(pet);
		}
		return res.status(400).json({ message: "Pet already exists" });
	} 
	catch (error) {
		return res.status(404).json({ message: error.message });
	}
}

const getPets = async (req, res) => {

	const { name } = req.query; 

	try {
		let pets = await Pet.findAll({
			include: {
				model: Foundation,
				attributes: ["name", "images"]
			}
		})

		if (name) {
			const petsByName = pets.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
			
			if (petsByName.length > 0) {
				return res.json(petsByName)
			}

			return res.status(400).json({ message: "Pet not found" });
		}

		return res.json(pets);
	}	
	catch (error) {
		res.status(404).json({ message: error.message });
	}
}

const getPetByID = async (req, res) => {
	const { id } = req.params;

	try {
		const pet = await Pet.findByPk(id, {
			include: {
				model: Foundation,
				attributes: ["name", "images"]
			}
		});
	
		pet ? res.json(pet) : res.status(400).json({ message: "Pet not found" });
	}
	catch (error) {
		res.status(404).json({ message: error.message });
	}
}

module.exports = {
	postPet,
	getPets,
	getPetByID
}
