// create the router for the article routes
const upload = require("../config/multer");
const express = require("express");
const router = express.Router();

const createArticle = require("../controllers/Articles/CreateArticle");
const getArticles = require("../controllers/Articles/GetArticles");
const getArticleById = require("../controllers/Articles/GetArticleById");
const UpdateArticle = require("../controllers/Articles/UpdateArticle");
const DeleteArticle = require("../controllers/Articles/DeleteArticle");

router.post("/", upload.single("image"), createArticle);
router.get("/", getArticles);
// get article by id
router.get("/:id", getArticleById);
router.patch("/:id", upload.single("image"), UpdateArticle);
router.delete("/:id", DeleteArticle);


module.exports = router;
