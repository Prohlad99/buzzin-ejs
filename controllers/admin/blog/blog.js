const Blog = require("../../../models/Blog");
const multer = require("multer");
const ImageKit = require("imagekit")
const dotenv = require("dotenv");

dotenv.config()
const storage = multer.memoryStorage();
const upload = multer({storage: storage});


// Configure ImageKit
const imagekit = new ImageKit({
    publicKey: process.env.imagekit_PUBLIC_KEY,
    privateKey: process.env.imagekit_PRIVATE_KEY,
    urlEndpoint: process.env.imagekit_URL_ENDPOINT,
 });

//render blog adding page
function getBlogAddForm(req, res, next){
    res.render("admin/pages/add-blog.ejs",{
        title: "Admin | Blog"
    })
}


// get blogs
async function getBlogs(req, res, next){
    try {
        const blogs = await Blog.find();

        res.render("admin/pages/blog-list.ejs", {
            blogs: blogs
        })
    } catch (error) {
        next(error)
    }
}


// add blog 
async function addBlog(req, res, next){
    try {
      const fileBuffer = req.file.buffer;
      const description = req.body.description;
      const originalFileName = req.file.originalname;

      const response = await imagekit.upload({
         file: fileBuffer,
         fileName: originalFileName, 
         folder:"buzzin-blog"
      });

      // Save the description and ImageKit URL to MongoDB
      const newBlog = new Blog({
         ...req.body,
         thumbnail: response.url,
      });
      
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