const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");

//internal import
const client = require("./routes/client");
const admin = require("./routes/admin");



const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

// database connection
mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})




//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//set view engine
app.set("view engine", "ejs");

//routing setup
app.use("/", client);
app.use("/admin", admin)


//404 error handle
app.use(notFoundHandler);
//default error handle
app.use(errorHandler);

//listing port
app.listen(process.env.PORT, () => {
  console.log(`I am listing port ${process.env.PORT}`);
});
