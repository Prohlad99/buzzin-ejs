function getIndex(req, res, next) {
  res.render("index", {
    title: "Buzzin | Home",
  });
}

module.exports = {
  getIndex,
};
