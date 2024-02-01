function getContact(req, res, next) {
  res.render("contact", {
    title: "Buzzin | Contact",
  });
}

module.exports = {
  getContact,
};
