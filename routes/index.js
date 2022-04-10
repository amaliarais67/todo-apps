const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
  // res.json({
  // message: "Home Page"
  // })
});

const userRoutes = require("./todo");

route.use("/todos", userRoutes);

module.exports = route;
