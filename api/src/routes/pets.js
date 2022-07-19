const express = require('express');
const router = express.Router();
const { getPetsFoundation } = require('../controllers/pets');

router.get("/", getPetsFoundation)

module.exports = router;