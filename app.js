require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const userRouter = require("./Routes/user");
const gridRouter = require("./Routes/trades");

const app = express();
app.use(express.json());
app.set("trust proxy", true);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(userRouter);
app.use(gridRouter);

// -- connect to a db
// -- Sign Up User
// -- Sign in User
// -- get User Profile
// --update count

module.exports = app;
