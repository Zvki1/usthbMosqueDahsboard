const Activity = require("../../models/Activity")

const getActivityByID = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ error: "Article ID is required" });
    }
    try {
            const activity = await Activity.findById(req.params.id);
            if (!activity) {
                return res.status(404).json({ error: "Activity not found" });
            }
            res.status(200).json(activity);
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to get activity", details: error.message });
    }
}

module.exports = getActivityByID;