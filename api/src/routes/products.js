const express = require('express');
const router = express.Router();
const { postProduct, getProducts, getProductByID, deleteProductByID,updateProductByID} = require("../controllers/products"); 

router.post("/", postProduct);
router.get("/", getProducts);
router.get("/:id", getProductByID);
router.delete("/:id", deleteProductByID);
router.put("/:id", updateProductByID);
module.exports = router;
