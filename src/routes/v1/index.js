const express = require("express");
const { WorkController } = require("../../controllers");

const router = express.Router();

router.get("/info", WorkController.info);

module.exports = router;
