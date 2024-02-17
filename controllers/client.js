// home page render 
function getIndex(req, res, next) {
    res.render("./../views/client/pages/index.ejs", {
      title: "Buzzin | Home",
    });
}

//about page render
function getAbout(req, res, next) {
    res.render("./../views/client/pages/about_us.ejs", {
      title: "Buzzin | About",
    });
}

// blog page render 
function getBlog(req, res, next) {
    res.render("./../views/client/pages/blogs.ejs", {
      title: "Buzzin | Blog",
    });
}

// contact page render
function getContact(req, res, next) {
    res.render("./../views/client/pages/contact.ejs", {
      title: "Buzzin | Contact",
    });
}

// blogs page render 
function getBlog(req, res, next) {
    res.render("./../views/client/pages/blogs.ejs", {
      title: "Buzzin | Blog",
    });
}

// full team page render 
function getTeam(req, res, next) {
    res.render("./../views/client/pages/full_team.ejs", {
      title: "Buzzin | Team",
    });
}


module.exports = {
    getIndex,
    getAbout,
    getBlog,
    getContact,
    getContact,
    getTeam
  };
  