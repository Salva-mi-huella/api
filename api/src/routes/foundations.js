const express = require('express');
const router = express.Router();
const { postFoundation, getFoundations, getFoundation } = require("../controllers/foundations"); 

router.post("/", postFoundation);
router.get("/", getFoundations);
router.get("/:id", getFoundation);

module.exports = router;