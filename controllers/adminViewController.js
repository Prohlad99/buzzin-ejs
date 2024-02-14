function getDashboard(req, res, next) {
    res.render("./../views/admin/pages/index.ejs", {
      title: "Admin | Dashboard",
    });
}

function getAddBlogForm(req, res, next) {
  res.render("./../views/admin/pages/add_blog_form.ejs", {
    title: "Admin | Add Blog",
  });
}

function getBlogs(req, res, next) {
  res.render("./../views/admin/pages/viewBlogs.ejs", {
    title: "Admin | Add Blog",
  });
}

function getAddCategory(req, res, next) {
  res.render("./../views/admin/pages/add_category.ejs", {
    title: "Admin | Add Category",
  });
}

function categoryList(req, res, next) {
  res.render("./../views/admin/pages/category_list.ejs", {
    title: "Admin | Add Category",
  });
}

function about(req, res, next) {
  res.render("./../views/admin/pages/about_us.ejs", {
    title: "Admin | Add Category",
  });
}




module.exports = {
  getDashboard,
  getAddBlogForm,
  getBlogs,
  getAddCategory,
  categoryList,
  about
  };