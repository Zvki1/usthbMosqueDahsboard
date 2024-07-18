const Submission =require("../../models/Submission")

const createSubmission = async (req, res) => {
    try {
        const newSubmission = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        };
        await Submission.create(newSubmission);
        res
            .status(201)
            .json({ message: "Submission created successfully", submission: newSubmission });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Failed to create submission", details: error.message });
    }
};

module.exports = createSubmission;