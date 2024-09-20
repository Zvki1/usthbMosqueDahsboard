const upload = require("../config/multer");
const express = require("express");
const router = express.Router();

const createActivity =require("../controllers/Activity/createActivity")
const getActivity = require("../controllers/Activity/getActivity");
const getActivityByID = require("../controllers/Activity/getActivityByID");
const updateActivity = require("../controllers/Activity/updateActivity");
const deleteActivity = require("../controllers/Activity/DeleteActivity");


router.post("/", upload.single("image"), createActivity);
router.get("/", getActivity);
router.get("/:id", getActivityByID);
router.patch("/:id", upload.single("image"), updateActivity);
router.delete("/:id", deleteActivity);


module.exports = router;