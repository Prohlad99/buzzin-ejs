function getTeam(req, res, next) {
  res.render("full_team", {
    title: "Buzzin | Team",
  });
}

module.exports = {
  getTeam,
};
