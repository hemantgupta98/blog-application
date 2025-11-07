const express = require("express");
const path = require("path");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");

const port = 8000;
const app = express();

app.use(express.urlencoded({ extended: false }));

mongoose
  .connect("mongodb://localhost:27017/application")
  .then((e) => console.log("mongodb is connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => console.log(`Server is connected ${port}`));
