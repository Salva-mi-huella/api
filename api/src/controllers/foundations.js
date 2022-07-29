const { Foundation, Pet, Request_adopt, Donation, News } = require("../db");

const postFoundation = async (req, res) => {

  	let { name, state, city, address, telephone_number } = req.body;

	try {
		const nameExists = name ? await Foundation.findOne({ where: { name }}) : null;
		if (!name || !state || !city || !address || !telephone_number) return res.status(400).json({ message: "Missing data"});
		
		if (nameExists) return res.status(400).json({ message: "Name already exists" });
			
		const foundation = await Foundation.create(req.body);
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
			include: [Request_adopt, Donation, News, Pet]
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

const getFoundationByEmailOrID = async (req, res) => {
	const { param } = req.params;
		
	let foundation;

	try {
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(param)) {
			foundation = await Foundation.findOne({ where: { email: param }}, {
				include: [Request_adopt, Pet, Donation, News]
			});
		}
		else {
			foundation = await Foundation.findByPk(param, {
				include: [Request_adopt, Pet, Donation, News]
			});
		}
		
		foundation ? res.json(foundation) : res.status(400).json({ message: "Foundation not found" });
	}
	catch (error) {
		res.status(404).json({ message: error.message });
	}
}

const putFoundation = async (req, res) =>{
	const { id } = req.params;
	const { name, state, city, address, lat, lng, telephone_number, email, instagram, website, images } = req.body;
    try {
		const response = await Foundation.update({
			name: name,
			state: state,
			city: city,
			address: address,
			lat: lat,
			lng: lng,
		    telephone_number: telephone_number,
		    email: email,
	        instagram: instagram,
	        website: website,
	        images: images,}, {where: { id }}
		)
		response ? res.json({message: "Data updated successfully"}) : res.status(400).json({ message: "The data has not been updated"});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
}


module.exports = {
	postFoundation,
  	getFoundations,
	getFoundationByEmailOrID,
	putFoundation
}
