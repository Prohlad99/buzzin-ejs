const About = require("../../../models/About");

// get about page 
async function getAbout(req, res, next){
    try {
        const about = await About.find();
        res.render("../../../views/admin/pages/about-us.ejs", {
            about: about
        })
    } catch (error) {
        next(error)
    }
}


//update about us
async function updateAboutUs(req, res, next){
    try {
        const about = await About.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        )

        res.status(200).json({
            message: "About us updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            errors:{
                common:{
                    message: "Something went wrong. Try agin"
                }
            }
        })
    }
}



module.exports = {
    getAbout,
    updateAboutUs
}