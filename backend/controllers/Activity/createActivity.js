const Activity = require("../../models/Activity");
const cloudinary = require("../../config/cloudinary");

const createActivity = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newActivity = {
      title: req.body.title,
      paragraph: req.body.paragraph,
      image: result.secure_url,
    };
    await Activity.create(newActivity);
    res
      .status(201)
      .json({
        message: "Activity created successfully",
        activity: newActivity,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create activity", details: error.message });
  }
};

module.exports = createActivity;
