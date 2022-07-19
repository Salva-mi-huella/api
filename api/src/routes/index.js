var express = require('express');
const router = express.Router();


module.exports = router;

router.use(express.json())

router.use('/foundations', foundations); 
router.use('/news', news);
router.use('/pets', pets);
router.use('/users', users);




