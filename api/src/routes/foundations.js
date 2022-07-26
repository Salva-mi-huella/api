const express = require('express');
const router = express.Router();
const { postFoundation, getFoundations, getFoundationByID, putFoundation } = require("../controllers/foundations"); 

router.post("/", postFoundation);
router.get("/", getFoundations);
router.get("/:id", getFoundationByID);
router.put("/:id", putFoundation);

module.exports = router;
