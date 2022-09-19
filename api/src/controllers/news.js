const { News, Foundation } = require("../db");

//RUTA PARA POST NEWS
const postNews = async (req,res) =>{
    const { title, foundation, description, images } = req.body;

    const newExists = await News.findOne({ where: { title }});

    if (newExists) return res.status(400).json({ message: "New already exists" });

    try {
        if (!title || !description || !images) {
            return res.status(400).json({ message: "Missing data" });
        }
        const news = await News.create(req.body);
        news.setFoundation(foundation);
        return res.json(news);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}
//RUTA PARA GET NEWS
const getNews = async (req,res) =>{
    const { name } = req.query;
    try {
        let news = await News.findAll({
            include: {
                model: Foundation,
                attributes: ["name", "images"]
            }
        })
        if (name) {
            const newsByName = news.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
            if (newsByName.length > 0) {
                return res.json(newsByName)
            }
            return res.status(400).json({ message: "News not found" });
        }
        return res.json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getNewByID = async (req, res) => {
	const { id } = req.params;

	try {
		const foundNew = await News.findByPk(id, {
            include: {
                model: Foundation,
                attributes: ["name", "images"]
            }
        });
	
		foundNew ? res.json(foundNew) : res.status(400).json({ message: "New not found" });
	}
	catch (error) {
		res.status(404).json({ message: error.message });
	}
}

const deleteNews = async (req, res) => {
    const { id } = req.params;

    const newExists = await News.findOne({ where: { id }});
    if (!newExists) return res.status(400).json({ message: "New not exists" });

    try {
        const deletedUser = await News.destroy({ where: { id } });
        if (deletedUser) return res.json({ message: "New deleted successfully" });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = {
    postNews,
    getNews,
    getNewByID,
    deleteNews
}
