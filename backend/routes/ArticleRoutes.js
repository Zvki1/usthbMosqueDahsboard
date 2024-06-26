// create the router for the article routes
const upload = require("../config/multer");

const express = require("express");
const router = express.Router();
const createArticle = require("../controllers/CreateArticle");

router.post("/", upload.single("image"), createArticle);

module.exports = router;
