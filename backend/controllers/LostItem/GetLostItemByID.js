const LostItem = require('../../models/LostItem');

const GetLostItemByID = async (req, res) => {
    
        try {
            if (!req.params.id) {
                return res.status(400).json({ error: "Article ID is required" });
            }
            const lostItem = await LostItem.findById(req.params.id);
    
            res.status(200).json({ lostItem });
        } catch (error) {
            res.status(500).json({ error: "Failed to get lostItem", details: error.message });
        }
    }

module.exports = GetLostItemByID;