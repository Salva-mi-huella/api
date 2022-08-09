const express = require('express');
const router = express.Router();
const { postProduct, getProducts, getProductByID,updateProductByID} = require("../controllers/products"); 

router.post("/", postProduct);
router.get("/", getProducts);
router.get("/:id", getProductByID);
router.put("/:id", updateProductByID);
module.exports = router;
