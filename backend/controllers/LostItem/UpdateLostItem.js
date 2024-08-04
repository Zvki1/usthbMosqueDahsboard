const LostItem = require('../../models/LostItem');

const UpdateLostItem = async (req, res) => {

    try {
        if (!req.params.id) {
        return res.status(400).json({ message: 'Invalid request. Please provide the lostItem id' });
        }
        const lostItem = await LostItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!lostItem) {
        return res.status(404).json({ message: 'LostItem not found' });
        }
        res.status(200).json({ lostItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

module.exports = UpdateLostItem;