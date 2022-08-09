const express = require('express');
const router = express.Router();
const { postPet, getPets, getPetByID, updatePetStatus, updatePet } = require('../controllers/pets');

router.post("/", postPet);
router.get("/", getPets);
router.get("/:id", getPetByID);
router.put("/:id", updatePet);
router.put("/status/:id", updatePetStatus);

module.exports = router;
