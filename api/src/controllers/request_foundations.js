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

const updateRequestFoundations = async (req, res) => {
    const { id } = req.params;
    const { name, email, telephone, post_date, message, status } = req.body;

    try {
        const request = await Request_foundation.findByPk(id);
        
        if (!request) return res.status(400).json({ message: "Request not found" });
        
        const updatedRequest = await Request_foundation.update({
            name: name,
            email: email,
            telephone: telephone,
            post_date: post_date,
            message: message,
            status: status
        }, { where: { id }});

        updatedRequest ? res.json("Request updated successfully") : res.status(400).json({ message: "The data has not been updated"});
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = {
    postRequestFoundations,
    getRequestFoundations,
    updateRequestFoundations
}
