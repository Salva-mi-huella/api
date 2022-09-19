const express = require('express');
const router = express.Router();
const {postNews, getNews, getNewByID, deleteNews} = require('../controllers/news');

router.post("/", postNews);
router.get("/", getNews);
router.get("/:id", getNewByID);
router.delete("/:id", deleteNews);

module.exports = router;
