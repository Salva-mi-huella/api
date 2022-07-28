const { User, Foundation } = require("../db");

const checkUser = async (req, res) => {
    const { nickname, name, email, } = req.body;

    const userExists = await User.findOne({ where: { email }});
    const foundationExists = await Foundation.findOne({ where: { email }});

    try {
        if (!name || !nickname || !email) return res.status(400).json({ message: "Missing data" });

        if (!userExists && !foundationExists) {
            const user = await User.create(req.body);
            return res.json(user);
        }
        else if (userExists && !foundationExists) {
            return res.json({ user: userExists.dataValues });
        }
        else {
            return res.json({ foundation: foundationExists.dataValues });
        }
    } 
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getUsers = async (req, res) => {
    
    try {
        const users = await User.findAll();
        return res.json(users);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getUserByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOne({ where: { email }});

        user ? res.json(user) : res.status(400).json({ message: "User not found " });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const putUser = async (req, res) => { 
    const { email: paramEmail } = req.params;
    const { nickname, name, email, birthday, picture, city, dni, telephone_number, address } = req.body;
    
    try {
        const response = await User.update(
            {
                nickname: nickname,
                name: name,
                email: email,
                picture: picture,
                city: city,
                dni: dni,
                birthday: birthday,
                telephone_number: telephone_number,
                address: address
            }, {where: { email: paramEmail }}
        )
        response ? res.json({message: "Data updated successfully"}) : res.json({ message: "The data has not been updated" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
  checkUser,
  getUsers,
  getUserByEmail,
  putUser
}
