const { Message, Foundation } = require("../db");

const postMessage = async (req, res) => {
    const { name, email, message, foundation } = req.body;

    if (!name || !email || !message) return res.status(400).json({ message: "Missing data" });

    try {
        const message = await Message.create(req.body);
        message.setFoundation(foundation);
        res.json(message);
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
} 

const getMessages = async (req, res) => {
    try {
        const messages = await Message.findAll({ include: [Foundation]})
 
        return res.json(messages.map(message => message.dataValues));
    }
    catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

const getMessagesByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const messages = await Message.findAll({ where: { email }, include: [Foundation]});
    
        return res.json(messages);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = {
    postMessage,
    getMessages,
    getMessagesByEmail
}