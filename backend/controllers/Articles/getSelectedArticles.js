const Article = require('../../models/Article');


const getSelectedArticles = async (req, res) => {
    try {
        const articles = await Article.find({ isSelected: true });
        res.json({articles});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getSelectedArticles;