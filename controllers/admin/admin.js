function getDashboard(req, res, next) {
    res.render("admin/pages/index.ejs", {
      title: "Admin | Dashboard",
    });

}



module.exports = {
    getDashboard
}