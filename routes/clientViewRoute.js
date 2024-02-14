const express = require("express");
const router = express.Router();
const { getAbout,getBlog,getContact,getIndex,getTeam } = require("../controllers/clientViewController");

router.get("/", getIndex);
router.get("/about", getAbout);
router.get("/contact", getContact);
router.get("/blogs", getBlog);
router.get("/team", getTeam);

module.exports = router;
