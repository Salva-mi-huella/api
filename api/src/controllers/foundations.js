const { Foundation, Pet, Request, Donations } = require("../db");
const bcrypt = require('bcrypt');

const postFoundation = async (req, res) => {
  let { name, state, city, address, telephone_number, password, email, instagram, website, images } = req.body;

	let passwordHash = bcrypt.hashSync(password, 10);

	password = passwordHash;

	try {
		const nameExists = name ? await Foundation.findOne({ where: { name }}) : null;
		if (!name || !state || !city || !address || !telephone_number || !password) {
			return res.status(400).json({ message: "Missing data"});
		}
		
		if (nameExists) return res.status(400).json({ message: "Name already exists" });
			
		const foundation = await Foundation.create({ name, state, city, address, telephone_number, password, email, instagram, website, images });
		return res.json(foundation);
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
				attributes: ["id", "name", "images"]
			},
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

const getFoundationByID = async (req, res) => {
	const { id } = req.params;

	try {
		const foundation = await Foundation.findByPk(id, {
            include:[Request, Pet, Donations]
        });
		
		foundation ? res.json(foundation) : res.status(400).json({ message: "Foundation not found" });
	}
	catch (error) {
		res.status(404).json({ message: error.message });
	}
}

const putFoundation = async (req, res) =>{
	let { id } = req.params;
	let { name, location, telephone_number, email, instagram, website, images } = req.body;
    try {
		let response = await Foundation.update(
			{name: name,
			location: location,
		    telephone_number: telephone_number,
		    email: email,
	        instagram: instagram,
	        website: website,
	        images: images,},{where: {id: id}}
		)
		res.json({message: "Data updated successfully"});
	} catch (error) {
		res.status(404).json({ message: "The data has not been updated" });
	}
}


module.exports = {
	postFoundation,
  	getFoundations,
	getFoundationByID,
	putFoundation
}
