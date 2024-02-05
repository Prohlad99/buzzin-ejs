function getAdmin(req, res, next) {
  res.render("admin", {
    title: "Admin | Dashboard",
  });
}

// blog adding form
function getAddBlog(req, res, next) {
  res.render("add_blog", {
    title: "Admin | Blog",
  });
}

// show all blogs
function getBlogs(req, res, next) {
  res.render("admin_blogs", {
    title: "Admin | Blog",
  });
}

module.exports = {
  getAdmin,
  getAddBlog,
  getBlogs,
};
