const Article = require("../../models/Article");
const cloudinary = require("../../config/cloudinary");

const createArticle = async (req, res) => {
  try {
    // Upload de l'image sur Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Création de l'objet article avec l'URL de l'image
    const newArticle = {
      title: req.body.title,
      paragraph: req.body.paragraph,
      image: result.secure_url,
    };

    // Sauvegarde de l'article dans la base de données
    await Article.create(newArticle);

    res
      .status(201)
      .json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create article", details: error.message });
  }
};

module.exports = createArticle;
