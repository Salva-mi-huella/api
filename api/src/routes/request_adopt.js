const express = require('express');
const { postRequestAdopt, getRequestAdopt } = require('../controllers/request_adopt');
const router = express.Router();

router.post("/", postRequestAdopt);
router.get("/", getRequestAdopt);

module.exports = router;