const Article = require('../../models/Article');

const DeleteArticle = async (req, res) => {
    try {
        if (!req.params.id) {
        return res
            .status(400)
            .json({ message: 'Invalid request. Please provide the article id' });
        }
        const article = await Article.findByIdAndDelete(req.params.id);
        if (!article) {
        return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

module.exports = DeleteArticle;