const express = require("express");
const axios = require("axios");

const router = express.Router();

("https://api.github.com/users/AGhafoor94/repos");
const baseUrl = "https://api.github.com/users/AGhafoor94/repos";

const sendHome = (req, res) => {
  res.redirect("/home");
};

const homeRoute = (req, res) => {
  res.render("home");
};

const portfolioPage = async (req, res) => {
  const response = await axios({
    url: baseUrl,
    method: "GET",
  });
  res.render("projects", { response: response.data });
};

const searchRepo = async ({ body }, res) => {
  const { repository } = body;
  const response = await axios({
    url: baseUrl,
    method: "GET",
  });
  const content = await axios({
    url: `https://api.github.com/repos/AGhafoor94/${repository}`,
    method: "GET",
  });
  res.render("projects", {
    response: response.data,
    content: content.data,
  });
};

router.get("/", sendHome);
router.get("/home", homeRoute);
router.get("/portfolio", portfolioPage);
router.post("/portfolio", searchRepo);

module.exports = router;
