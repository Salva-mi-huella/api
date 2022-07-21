const express = require('express');
const { postUser } = require('../controllers/users');
const { requiresAuth } = require('express-openid-connect');

const router = express.Router();

// router.post("/", requiresAuth() , postUser);

module.exports = router;