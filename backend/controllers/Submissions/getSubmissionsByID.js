const Submission = require('../../models/Submission');

const getSubmissionsByID = async (req, res) => {
    try {
        if (!req.params.id) {
            return res
                .status(400)
                .json({ message: 'Invalid request. Please provide the submission id' });
        }
        const submission = await Submission.findById(req.params.id);
        if (!submission) {
            return res.status(404).json({ message: 'Submission not found' });
        }
        res.status(200).json({ submission });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = getSubmissionsByID;