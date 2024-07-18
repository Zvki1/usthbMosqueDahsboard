const express = require("express");
const router = express.Router();

const createSubmission = require ("../controllers/Submissions/createSubmissions");

router.post("/", createSubmission);


module.exports = router;