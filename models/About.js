const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema(
  {
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

const About = mongoose.model("About", aboutSchema);

module.exports = About;
