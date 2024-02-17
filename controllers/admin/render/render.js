function getDashboard(req, res, next) {
    res.render("../../../views/admin/pages/index.ejs", {
      title: "Admin | Dashboard",
    });
}

function getAddBlog(req, res, next) {
  res.render("../../../views/admin/pages/add-blog.ejs", {
    title: "Admin | Blog",
  });
}

function getBlogList(req, res, next) {
  res.render("../../../views/admin/pages/blog-list.ejs", {
    title: "Admin | Blog",
    
  });
}

function getAddCategory(req, res, next) {
  res.render("../../../views/admin/pages/add-category.ejs", {
    title: "Admin | Category",
  });
}

function getCategoryList(req, res, next) {
  res.render("../../../views/admin/pages/category-list.ejs", {
    title: "Admin | Category",
  });
}

function getAbout(req, res, next) {
  res.render("../../../views/admin/pages/about-us.ejs", {
    title: "Admin | About",
  });
}






module.exports = {
  getDashboard,
  getAddBlog,
  getAddCategory,
  getCategoryList,
  getAbout,
  getBlogList
  }