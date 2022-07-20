const express = require('express');
const router = express.Router();
const {postNews, getNews} = require('../controllers/news');

router.post("/", postNews);
router.get("/", getNews);

module.exports = router;