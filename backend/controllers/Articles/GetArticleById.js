const Article = require("../../models/Article");

const getArticleById = async (req, res) => {
    // Check if the id is provided
    if (!req.params.id) {
        return res.status(400).json({ error: "Article ID is required" });
    }
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }
        res.status(200).json(article);
    } catch (error) {
        res
        .status(500)
        .json({ error: "Failed to get article", details: error.message });
    }
}

module.exports = getArticleById;