const express = require("express");
const router = express.Router();
const { getDashboard } = require("../controllers/admin/admin");
const {getAbout} = require("../controllers/admin/about/about");
const {getBlogAddForm, getBlogs} = require("../controllers/admin/blog/blog");
const {getAddCategoryForm,getCategory} = require("../controllers/admin/category/category");




// page rendering route 
router.get("/", getDashboard);
router.get("/about", getAbout);
router.get("/blog/add", getBlogAddForm);
router.get("/blogs", getBlogs);
router.get("/category/add", getAddCategoryForm);
router.get("/categories", getCategory);



module.exports = router;
