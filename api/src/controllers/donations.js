const { Donation, User, Foundation } = require("../db");

const postDonation = async (req, res) => {
    const { amount, points, method, user, foundation  } = req.body;

    if (!amount || !points || !method) return res.status(400).json({ message: "Missing data" });

    try {
        const donation = await Donation.create(req.body);
        await donation.setUser(user);
        await donation.setFoundation(foundation);
        return res.json(donation);
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getDonations = async (req, res) => {
    try {
        const donations = await Donation.findAll({ include: [Foundation, User] });

        return res.json(donations); 
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = {
    postDonation,
    getDonations
}