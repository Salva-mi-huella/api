const express = require('express');
const router = express.Router();
const { postPet, getPets, getPetByID } = require('../controllers/pets');

router.post("/", postPet);
router.get("/", getPets);
router.get("/:id", getPetByID);

module.exports = router;
