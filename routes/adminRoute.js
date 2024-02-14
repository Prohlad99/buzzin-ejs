const express = require("express");
const router = express.Router();
const { getDashboard, getAddBlogForm, getBlogs, getAddCategory, categoryList, about } = require("../controllers/adminViewController");

router.get("/", getDashboard);
router.get("/blog/add", getAddBlogForm);
router.get("/blogs", getBlogs);
router.get("/category/add", getAddCategory);
router.get("/categories", categoryList);
router.get("/about", about);







module.exports = router;
