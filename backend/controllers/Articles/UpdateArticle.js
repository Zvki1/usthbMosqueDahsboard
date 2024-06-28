const Article = require("../../models/Article");
const cloudinary = require("../../config/cloudinary");

const UpdateArticle = async (req, res) => {
  const articleId =req.params.id
  let image;
try {
    if(req.file?.path) {
        const result = await cloudinary.uploader.upload(req.file.path);
        image=result.secure_url
    }
    const {title,paragraph,isSelected}=req.body
    const articleUpdated = await Article.findByIdAndUpdate(articleId,{title,paragraph,image,isSelected},{new:true})
    res.status(200).json({title,paragraph,image,articleUpdated,message:"Article updated successfully"})
} catch (error) {
    console.log(error);
    res.status(500).json({error:"Failed to update article",details:error.message})
}
};

module.exports = UpdateArticle;
