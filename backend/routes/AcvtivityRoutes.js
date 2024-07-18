const upload = require("../config/multer");
const express = require("express");
const router = express.Router();

const createActivity =require("../controllers/Activity/createActivity")
const getActivity = require("../controllers/Activity/getActivity");
const getActivityByID = require("../controllers/Activity/getActivityByID");
const updateActivity = require("../controllers/Activity/updateActivity");

router.post("/", upload.single("image"), createActivity);
router.get("/", getActivity);
router.get("/:id", getActivityByID);
router.patch("/:id", upload.single("image"), updateActivity);


module.exports = router;