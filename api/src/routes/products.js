const express = require('express');
const router = express.Router();
const { postProduct, getProducts, getProductByID} = require("../controllers/products"); 

router.post("/", postProduct);
router.get("/", getProducts);
router.get("/:id", getProductByID);

module.exports = router;
