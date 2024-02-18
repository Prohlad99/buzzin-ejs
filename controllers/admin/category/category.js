const Category = require("../../../models/Category")

//render add category page
function getAddCategoryForm(req, res, next){
    res.render("admin/pages/add-category.ejs",{
        title: "Admin | Category"
    })
}



// get category
async function getCategory(req, res, next){
    try {
        const categories = await Category.find();
        res.render("admin/pages/category-list.ejs", {
            categories: categories
        })
    } catch (error) {
        next(error)
    }
}


// add category
async function addCategory(req, res, next){
    let newCategory;
    newCategory = new Category(req.body);

    try {
        const result = await newCategory.save();
        res.status(200).json({
            message:"Category added successfully."
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

// update category
async function updateCategory(req, res, next) {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, 
            { new: true } 
        );
        if (!updatedCategory) {
            return res.status(404).json({
                errors: {
                    common: {
                        message: "Category not found"
                    }
                }
            });
        }
        res.status(200).json({
            message: "Category updated successfully",
            category: updatedCategory
        });
    } catch (error) {
        res.status(500).json({
            errors: {
                common: {
                    message: "Something went wrong! Try again"
                }
            }
        });
    }
}


//delete category
async function deleteCategory(req, res, next){
    try {
        const category = await Category.findByIdAndDelete({
            _id: req.params.id
        });

        res.status(200).json({
            message: "Category removed successfully"
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





module.exports = {
  getAddCategoryForm,
  addCategory,
  getCategory,
  deleteCategory,
  updateCategory
};
