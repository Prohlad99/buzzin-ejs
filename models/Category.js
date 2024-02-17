const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    category_name: {
        type: String,
        require: true
      },
    
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
