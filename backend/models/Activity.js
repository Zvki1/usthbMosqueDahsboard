const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    paragraph: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    isSelected: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model('Activity', activitySchema);