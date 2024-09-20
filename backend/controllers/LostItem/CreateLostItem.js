const LostItem = require('../../models/LostItem');

const createLostItem = async (req, res) => {

    try {
        const newLostItem = {
            title: req.body.title,
            paragraph: req.body.paragraph || "",
            isSelected: req.body.isSelected || true,
        };

        await LostItem.create(newLostItem);

        res.status(201).json({ message: "LostItem created successfully", lostItem: newLostItem });
    } catch (error) {
        res.status(500).json({ error: "Failed to create lostItem", details: error.message });
    }
};

module.exports = createLostItem;