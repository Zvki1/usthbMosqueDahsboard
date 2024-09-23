const express = require("express");
const router = express.Router();

const createLostItem = require("../controllers/LostItem/CreateLostItem");
const getAllLostItems = require("../controllers/LostItem/GetAllLostItems");
const getLostItemById = require("../controllers/LostItem/GetLostItemByID");
const DeleteLostItem = require("../controllers/LostItem/DeleteLostItem");
const UpdateLostItem = require("../controllers/LostItem/UpdateLostItem");
const getSelectedLostItem = require("../controllers/LostItem/GetSelectedLostItem");

router.post("/", createLostItem);
router.get("/", getAllLostItems);
router.get("/selected", getSelectedLostItem);
router.get("/:id", getLostItemById);
router.delete("/:id", DeleteLostItem);
router.patch("/:id", UpdateLostItem);

module.exports = router;