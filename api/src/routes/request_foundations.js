const express = require('express');
const { postRequestFoundations, getRequestFoundations, updateRequestFoundations } = require('../controllers/request_foundations');
const router = express.Router();

router.post("/", postRequestFoundations);
router.get("/", getRequestFoundations);
router.put("/:id", updateRequestFoundations);

module.exports = router;