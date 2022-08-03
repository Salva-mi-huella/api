const { Request_adopt, User, Foundation, Pet } = require("../db");

const postRequestAdopt = async (req, res) => {
    const { name, lastname, email, phone, age, textarea, foundation, pet, user } = req.body;

    if (!name || !lastname || !email || !phone || !age || !textarea) return res.status(400).json({ message: "Mising data "});

    try {
        if (age < 18) return res.status(400).json({ message: "You have to be of legal age to adopt" });

        const request = await Request_adopt.create(req.body);
        await request.setFoundation(foundation);
        await request.setPet(pet);
        await request.setUser(user);
        return res.json(request);
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getRequestAdopt = async (req, res) => {
    try {
        const requests = await Request_adopt.findAll({ include: [User, Pet, Foundation]});

        return res.json(requests);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const updateRequestAdopts = async (req, res) => {
    const { id } = req.params;
    const { name, lastname, email, phone, age, status, post_date, textarea } = req.body;

    try {
        const request = await Request_adopt.findByPk(id);
        
        if (!request) return res.status(400).json({ message: "Request not found" });
        
        const updatedRequest = await Request_adopt.update({
            name: name,
            lastname: lastname,
            email: email,
            phone: phone,
            age: age,
            status: status,
            post_date: post_date,
            textarea: textarea
        }, { where: { id }});

        updatedRequest ? res.json("Request updated successfully") : res.status(400).json({ message: "The data has not been updated"});
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = {
    postRequestAdopt,
    getRequestAdopt,
    updateRequestAdopts
}

