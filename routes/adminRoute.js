const express = require("express");
const router = express.Router();
const {
  getAdmin,
  getAddBlog,
  getBlogs,
} = require("../controllers/adminController");

router.get("/", getAdmin);
router.get("/blog/add", getAddBlog);
router.get("/blogs", getBlogs);

module.exports = router;
