const Activity = require("../../models/Activity");
const cloudinary = require("../../config/cloudinary");
const updateActivity = async (req, res) => {
    const activityId = req.params.id;
    let image
    try {
        if(req.file?.path) {
            const result = await cloudinary.uploader.upload(req.file.path);
            image=result.secure_url
        }
        const {title,paragraph,isSelected}=req.body
        const activityUpdated = await Activity.findByIdAndUpdate(activityId,{title,paragraph,image,isSelected},{new:true})
        res.status(200).json({title,paragraph,image,activityUpdated,message:"Activity updated successfully"})

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to update activity",details:error })
    }
}
module.exports = updateActivity;