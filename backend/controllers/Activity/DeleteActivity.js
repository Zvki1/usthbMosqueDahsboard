const Activity = require("../../models/Activity");

const DeleteActivity = async (req, res) => {
  try {
    if (!req.params.id) {
      return res
        .status(400)
        .json({ message: "Invalid request. Please provide the activity id" });
    }
    const activity = await Activity.findByIdAndDelete(req.params.id);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }
    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = DeleteActivity;