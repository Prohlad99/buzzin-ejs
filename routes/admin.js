const express = require("express");
const router = express.Router();
const { getDashboard, getAbout, getAddBlog, getAddCategory, getCategoryList, getBlogList } = require("../controllers/admin/render/render");




// page rendering route 
router.get("/", getDashboard);
router.get("/about", getAbout);
router.get("/blog/add", getAddBlog);
router.get("/blogs", getBlogList);
router.get("/category/add", getAddCategory);
router.get("/categories", getCategoryList);







module.exports = router;
