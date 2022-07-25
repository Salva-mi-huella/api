const {Product} = require("../db");

// ---------------------RUTA POST PRODUCTOS--------------------------
const postProduct = async (req, res) => {
    const { name, price_points, type, category } = req.body;
    
    try {
        if (!name || !price_points || !type || !category) {
        return res.status(400).json({ message: "Missing data" });
        }
    
        const product = await Product.create(req.body);
        return res.json(product);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
    }


// ---------------------RUTA GET PRODUCTOS--------------------------
const getProducts = async (req, res) => {
    const { name } = req.query;
    try {
        let products = await Product.findAll();
        if (name) {
            const productsByName = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
            if (productsByName.length > 0) {
                return res.json(productsByName)
            }
            return res.status(400).json({ message: "Product not found" });
        }
        return res.json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// ---------------------RUTA GET PRODUCT BY ID--------------------------
const getProductByID = async (req, res) => {
	const { id } = req.params;

	try {
		const product = await Product.findByPk(id);
		
		product ? res.json(product) : res.status(400).json({ message: "Product not found" });
	}
	catch (error) {
		res.status(404).json({ message: error.message });
	}
}

    module.exports = {
        postProduct,
        getProducts,
        getProductByID
    }