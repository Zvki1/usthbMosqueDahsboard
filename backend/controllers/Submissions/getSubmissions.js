const Submission = require('../../models/Submission');

const getSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.status(200).json({ submissions });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getSubmissions;