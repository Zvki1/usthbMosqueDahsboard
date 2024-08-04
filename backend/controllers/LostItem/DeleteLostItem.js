const LostItem = require('../../models/LostItem');

const DeleteLostItem = async (req, res) => {
    try {
        if (!req.params.id) {
        return res.status(400).json({ message: 'Invalid request. Please provide the lostItem id' });
        }
        const lostItem = await LostItem.findByIdAndDelete(req.params.id);
        if (!lostItem) {
        return res.status(404).json({ message: 'LostItem not found' });
        }
        res.status(200).json({ message: 'LostItem deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

module.exports = DeleteLostItem;