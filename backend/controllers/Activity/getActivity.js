const Activity = require("../../models/Activity")

const getActivity = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to get activities", details: error.message });
    }

}
module.exports = getActivity;