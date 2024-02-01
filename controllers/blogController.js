function getBlog(req, res, next) {
  res.render("blogs", {
    title: "Buzzin | Blog",
  });
}

module.exports = {
  getBlog,
};
