const LostItem = require('../../models/LostItem');

const getAllLostItems = async (req, res) => {

    try {
        const lostItems = await LostItem.find({});

        res.status(200).json({ lostItems });
    } catch (error) {
        res.status(500).json({ error: "Failed to get lostItems", details: error.message });
    }
}

module.exports = getAllLostItems;