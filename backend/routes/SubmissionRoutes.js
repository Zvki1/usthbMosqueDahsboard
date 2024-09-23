const express = require("express");
const router = express.Router();

const createSubmission = require ("../controllers/Submissions/createSubmissions");
const getSubmissions = require ("../controllers/Submissions/getSubmissions");
const getSubmissionsByID = require ("../controllers/Submissions/getSubmissionsByID");

router.post("/", createSubmission);
router.get("/", getSubmissions);
router.get("/:id", getSubmissionsByID);

module.exports = router;