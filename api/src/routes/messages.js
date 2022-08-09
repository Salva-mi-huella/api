const express = require('express');
const { postMessage, getMessages, getMessagesByEmail } = require('../controllers/message');
const router = express.Router();

router.post("/", postMessage);
router.get("/", getMessages);
router.get("/:email", getMessagesByEmail);

module.exports = router;
