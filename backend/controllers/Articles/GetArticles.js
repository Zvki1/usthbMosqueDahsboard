const Article =require("../../models/Article")

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({isSelected: true});
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to get articles", details: error.message });
    }
    }

module.exports = getArticles;