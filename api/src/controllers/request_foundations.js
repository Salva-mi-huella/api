const { Request_foundation } = require("../db")

const postRequestFoundations = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) return res.status(400).json({ message: "Mising data" });

    try {

        const emailExists = await Request_foundation.findOne({ where: { email }});

        if (emailExists) return res.status(400).json({ message: "This foundation already sent a request" });

        const request = await Request_foundation.create(req.body);
        
        return res.json(request);
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getRequestFoundations = async (req, res) => {
    try {
        const requests = await Request_foundation.findAll();

        return res.json(requests);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = {
    postRequestFoundations,
    getRequestFoundations
}
