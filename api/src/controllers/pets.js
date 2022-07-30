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

const updatePet = async (req, res) => {
	const { id } = req.params;

	const { name, images, type, age, gender, description } = req.body;

	try {
		const updatedPet = await Pet.update({
			name: name,
			images: images,
			type: type,
			age: age,
			gender: gender,
			description: description
		}, { where: { id }});

		updatedPet ? res.json({ message: "Pet updated successfully" }) : res.status(404).json({ message: "Pet has not been updated "});
	}
	catch (error) {
		return res.status(404).json({ message: error.message });
	}
}

const updatePetStatus = async (req, res) => {
	const { id } = req.params;

	const { adopted } = req.body;
	
	try {
		const updatedPet = await Pet.update({
			adopted: adopted
		}, { where: { id }});
		
		updatedPet ? res.json({ message: "Status updated successfully" }) : res.status(404).json({ message: "The status has not been updated" });
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
	updatePet,
	updatePetStatus,
	getPets,
	getPetByID
}
