const express = require('express');
const { postUser, putUser } = require('../controllers/users');
const { requiresAuth } = require('express-openid-connect');

const router = express.Router();

// router.post("/", requiresAuth() , postUser);
router.put('/:id', putUser);
module.exports = router;