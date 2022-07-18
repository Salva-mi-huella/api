var express = require('express');
const router = express.Router();
const foundations = require('./middlewares/foundations.js'); 
const news = require('./middlewares/news.js');
const pets = require('./middlewares/pets.js');
const users = require('./middlewares/users.js');


module.exports = router;

router.use(express.json())

router.use('/foundations', foundations); 
router.use('/news', news);
router.use('/pets', pets);
router.use('/users', users);
