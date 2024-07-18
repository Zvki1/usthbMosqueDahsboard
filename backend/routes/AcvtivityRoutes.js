const upload = require("../config/multer");
const express = require("express");
const router = express.Router();

const createActivity =require("../controllers/Activity/createActivity")
const getActivity = require("../controllers/Activity/getActivity");
const getActivityByID = require("../controllers/Activity/getActivityByID");

router.post("/", upload.single("image"), createActivity);
router.get("/", getActivity);
router.get("/:id", getActivityByID);

module.exports = router;