const express = require("express");
const router = express.Router();

const sendHome = (req, res) => {
  res.redirect("/home");
};
const homeRoute = (req, res) => {
  res.render("home");
};
const portfolioPage = (req, res) => {
  res.render("projects");
};

router.get("/", sendHome);
router.get("/home", homeRoute);
router.get("/portfolio", portfolioPage);
module.exports = router;
