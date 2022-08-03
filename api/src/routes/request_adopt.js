const express = require('express');
const { postRequestAdopt, getRequestAdopt, updateRequestAdopts } = require('../controllers/request_adopt');
const router = express.Router();

router.post("/", postRequestAdopt);
router.get("/", getRequestAdopt);
router.put("/:id", updateRequestAdopts);

module.exports = router;