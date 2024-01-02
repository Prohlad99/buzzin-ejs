const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/usersController");
const avatarUpload = require("../middlewares/users/avatarUplpad");

router.get("/", getUsers);
router.post("/", avatarUpload);

module.exports = router;
