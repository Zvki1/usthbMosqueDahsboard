const express = require("express");
const router = express.Router();

const createSubmission = require ("../controllers/Submissions/createSubmissions");
const getSubmissions = require ("../controllers/Submissions/getSubmissions");

router.post("/", createSubmission);
router.get("/", getSubmissions);

module.exports = router;