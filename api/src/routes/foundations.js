const express = require('express');
const router = express.Router();
const { postFoundation, getFoundations, getFoundationByEmailOrID, putFoundation } = require("../controllers/foundations"); 

router.post("/", postFoundation);
router.get("/", getFoundations);
router.get("/:param", getFoundationByEmailOrID);
router.put("/:id", putFoundation);

module.exports = router;
