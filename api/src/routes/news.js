const express = require('express');
const router = express.Router();
const {postNews, getNews, getNewByID} = require('../controllers/news');

router.post("/", postNews);
router.get("/", getNews);
router.get("/:id", getNewByID);

module.exports = router;
