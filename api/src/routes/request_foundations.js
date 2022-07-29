const express = require('express');
const { postRequestFoundations, getRequestFoundations } = require('../controllers/request_foundations');
const router = express.Router();

router.post("/", postRequestFoundations);
router.get("/", getRequestFoundations);

module.exports = router;