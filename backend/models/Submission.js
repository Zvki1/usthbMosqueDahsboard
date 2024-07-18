const mongoose =require('mongoose');

const submissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    

})

module.exports = mongoose.model('Submission', submissionSchema);