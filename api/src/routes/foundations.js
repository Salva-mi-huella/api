const express = require('express');
const router = express.Router();
const { postFoundation, getFoundations, deleteFoundation } = require("../controllers/foundations"); 

router.post("/", postFoundation);
router.get("/", getFoundations);
router.delete("/:id", deleteFoundation);

module.exports = router;