const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 8080;

const app = express();
