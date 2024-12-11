const express = require("express");
const { barcodeScan, getScanHistory } = require("./scanningController");

const router = express.Router();

router.post("/barcodeScan", barcodeScan);
router.get("/history", getScanHistory);

module.exports = router;
