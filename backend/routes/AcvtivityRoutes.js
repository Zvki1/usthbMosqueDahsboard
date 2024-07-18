const upload = require("../config/multer");
const express = require("express");
const router = express.Router();

const createActivity =require("../controllers/Activity/createActivity")


router.post("/", upload.single("image"), createActivity);

module.exports = router;