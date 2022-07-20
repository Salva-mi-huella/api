const express = require('express');
const router = express.Router();
const { postPet, getPets } = require('../controllers/pets');

router.post("/", postPet);
router.get("/", getPets);

module.exports = router;