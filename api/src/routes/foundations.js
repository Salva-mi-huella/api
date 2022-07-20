const express = require('express');
const router = express.Router();
const { postFoundation, getFoundations } = require("../controllers/foundations"); 

router.post("/", postFoundation);
router.get("/", getFoundations);

module.exports = router;