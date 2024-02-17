const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    publish_date: {
        type: String,
        require: true
      },

      category: {
        type: String,
        require:true
      },

      blog_title: {
        type: String,
        require: true
      },
    
      meta_tag: {
        type: String,
      },
    
      meta_description: {
        type: String,
      },
    
    thumbnail: {
        type: String,
      },

      blog_description: {
      type: String,
    },
    
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
