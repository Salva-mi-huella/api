const express = require('express');
const router = express.Router();
const { postPet, getPets, getPet } = require('../controllers/pets');

router.post("/", postPet);
router.get("/", getPets);
router.get("/:id", getPet);

module.exports = router;