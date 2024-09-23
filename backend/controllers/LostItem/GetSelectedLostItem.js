const LostItem = require('../../models/LostItem');

const getSelectedLostItem = async (req, res) => {
    try {
        const lostItems = await LostItem.find({ isSelected: true });
        res.json({lostItems});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getSelectedLostItem;