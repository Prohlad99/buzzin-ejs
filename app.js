const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
//internal import
const indexRouter = require("./routes/indexRoute");
const aboutRoute = require("./routes/aboutRoute");
const teamRoute = require("./routes/teamRoute");
const blogRoute = require("./routes/blogRoute");
const contactRoute = require("./routes/contactRoute");

const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//set view engine
app.set("view engine", "ejs");

//routing setup
app.use("/", indexRouter);
app.use("/about", aboutRoute);
app.use("/team", teamRoute);
app.use("/blogs", blogRoute);
app.use("/contact", contactRoute);

//404 error handle
app.use(notFoundHandler);
//default error handle
app.use(errorHandler);

//listing port
app.listen(process.env.PORT, () => {
  console.log(`I am listing port ${process.env.PORT}`);
});
