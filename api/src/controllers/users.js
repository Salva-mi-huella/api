const { User } = require("../db");

// const postUser = async (req, res) => {
// 	const { name, nickname, picture, email } = req.oidc.user;

// 	try {
// 		if (!name || !nickname || !picture || !email) return res.status(400).json({ message: "Missing data" });
		
// 		const user = await User.create({ name, nickname, picture, email });

// 		return res.json(user);
// 	} 
// 	catch (error) {
// 		return res.status(404).json({ message: error.message });	
// 	}
// }


// server.get("/", (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? "Authenticated" : "Not Authenticated");    
// })

// server.get('/profile', requiresAuth(), (req, res) => {
//     res.send(JSON.stringify(req.oidc.user));
//     // const { nickname, name } = req.oidc.user;
//     // console.log({nickname, name});
// });

const putUser = async (req, res) =>{
    let { id } = req.params;
        let { nickname, name, email, picture, city, dni, telephone_number, address } = req.body;
    try {
        let response = await User.update(
            {
                nickname: nickname,
                name: name,
                email: email,
                picture: picture,
                city: city,
                dni: dni,
                telephone_number: telephone_number,
                address: address
            },{where: {id: id}}
        )
        res.json({message: "Data updated successfully"});
    } catch (error) {
        res.status(404).json({ message: "The data has not been updated" });
    }
}

module.exports = {
  //postUser,
  putUser
}
