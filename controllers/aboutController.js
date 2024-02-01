function getAbout(req, res, next) {
  res.render("about_us", {
    title: "Buzzin | About",
  });
}

module.exports = {
  getAbout,
};
