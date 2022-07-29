var express = require('express');
const router = express.Router();

const foundations = require("./foundations");
const news = require("./news");
const pets = require("./pets");
const users = require("./users");
const products = require("./products");
const donations = require("./donations");
const request_foundations = require("./request_foundations");
const request_adopt = require("./request_adopt");

module.exports = router;

router.use(express.json());

router.use('/foundations', foundations); 
router.use('/news', news);
router.use('/pets', pets);
router.use('/users', users);
router.use('/products', products);
router.use('/donations', donations);
router.use("/request_adopts", request_adopt);
router.use("/request_foundations", request_foundations);

