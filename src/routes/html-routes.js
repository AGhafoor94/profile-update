const express = require("express");
const router = express.Router();

("https://api.github.com/users/AGhafoor94/repos");
const baseUrl = "https://api.github.com/users/";

const sendHome = (req, res) => {
  res.redirect("/home");
};
const homeRoute = (req, res) => {
  res.render("home");
};
const portfolioPage = async (req, res) => {
  res.render("projects");
};

router.get("/", sendHome);
router.get("/home", homeRoute);
router.get("/portfolio", portfolioPage);
module.exports = router;
