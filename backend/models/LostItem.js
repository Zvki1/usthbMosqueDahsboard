const mongoose = require('mongoose');

const LostItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    paragraph: {
        type: String,
        required: false,
    },
    isSelected: {
        type: Boolean,
        default: true,
        required:false,
    },
    
});

module.exports = mongoose.model('LostItem', LostItemSchema);