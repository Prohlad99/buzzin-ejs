const Blog = require("../../../models/Blog");

//render blog adding page
function getBlogAddForm(req, res, next){
    res.render("../../../views/admin/pages/add-blog.ejs",{
        title: "Admin | Blog"
    })
}


//get blogs
async function getBlogs(req, res, next){
    try {
        const blogs = await Blog.find();

        res.render("../../../views/admin/pages/blog-list.ejs", {
            blogs: blogs
        })
    } catch (error) {
        next(error)
    }
}


// add blog 
async function addBlog(req, res, next){
    let newBlog = new Blog(req.body);

    try {
        const result = await newBlog.save();
        res.status(200).json({
            message: "Blog added successfully"
        })
    } catch (error) {
        res.status(500).json({
            errors:{
                common:{
                    message: "Something went wrong! Try again"
                }
            }
        })
    }
}


//update blog
async function updateBlog(req, res, next){
    try {
        const updateBlog =  await Blog.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        )
        if(!updateBlog){
            res.status(404).json({
                errors:{
                    common:{
                        message: "Blog not found!"
                    }
                }
            })
        }

        res.status(200).json({
            message: "Blog updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            errors:{
                common:{
                    message:"Something went wrong! Try again"
                }
            }
        })
    }
}


// delete blog 
async function deleteBlog(req, res, next){
    try {
        const deletedBlog = await Blog.findByIdAndDelete({
            _id: req.params.id
        })
        res.status(200).json({
            message: "Blog deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            errors:{
                common:{
                    message:"Something went wrong! Try again"
                }
            }
        })
    }
}


module.exports = {
    getBlogAddForm,
    getBlogs,
    addBlog,
    updateBlog,
    deleteBlog
}