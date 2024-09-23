const Activity = require('../../models/Activity');

const getSelectedActivities = async (req, res) => {
    try {
        const activities = await Activity.find({ isSelected: true });
        res.json({activities});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getSelectedActivities;