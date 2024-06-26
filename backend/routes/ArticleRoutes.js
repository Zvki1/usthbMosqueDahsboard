// create the router for the article routes
const upload = require("../config/multer");
const express = require("express");
const router = express.Router();

const createArticle = require("../controllers/Articles/CreateArticle");
const getArticles = require("../controllers/Articles/GetArticles");

router.post("/", upload.single("image"), createArticle);
router.get("/", getArticles);

module.exports = router;
