const express = require('express');
const router = express.Router();
const {postNews, getNews, getNew} = require('../controllers/news');

router.post("/", postNews);
router.get("/", getNews);
router.get("/:id", getNew);

module.exports = router;