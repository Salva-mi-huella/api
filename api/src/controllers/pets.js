const { Pet, Foundation } = require("../db");

const postPet = async (req, res) => {
	const { name, age, gender, description, foundation } = req.body;
	
	try {
		if (!name || !age || !gender || !description) {
			return res.status(400).json({ message: "Missing data" });
		}				
		const pet = await Pet.create(req.body);
		pet.setFoundation(foundation);
		return res.json(pet);
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
				attributes: ["name"]
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

const getPet = async (req, res) => {
	const { id } = req.params;

	try {
		const pet = await Pet.findByPk(id, {
			include: {
				model: Foundation,
				attributes: ["name"]
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
	getPet
}