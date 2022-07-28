const express = require('express');
const { postDonation, getDonations } = require('../controllers/donations');
const router = express.Router();

router.post("/", postDonation);
router.get("/", getDonations);

module.exports = router;