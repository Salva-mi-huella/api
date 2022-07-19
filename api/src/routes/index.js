var express = require('express');
const router = express.Router();

const foundations = require("./foundations");
const news = require("./news");
const pets = require("./pets");
const users = require("./users");

module.exports = router;

router.use(express.json());

router.use('/foundations', foundations); 
router.use('/news', news);
router.use('/pets', pets);
router.use('/users', users);

