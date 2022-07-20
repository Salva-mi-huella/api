const { News, Foundation } = require("../db");

//RUTA PARA POST NEWS
const postNews = async (req,res) =>{
    const { title, foundation, little_description } = req.body;
    try {
        if (!title || !little_description) {
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
                attributes: ["name"]
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

module.exports = {
    postNews,
    getNews
}