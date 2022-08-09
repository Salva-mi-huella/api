const express = require('express');
const { checkUser, putUser, getUsers, getUserByEmail } = require('../controllers/users');

const router = express.Router();

router.post("/", checkUser);
router.get("/", getUsers);
router.get("/:email", getUserByEmail);
router.put('/:email', putUser);
module.exports = router;