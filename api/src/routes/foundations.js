const express = require('express');
const router = express.Router();
const { postFoundation, getFoundations, getFoundationByID } = require("../controllers/foundations"); 

router.post("/", postFoundation);
router.get("/", getFoundations);
router.get("/:id", getFoundationByID);

module.exports = router;
