const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const htmlRoutes = require("./routes/html-routes");
// Setting up the server

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

const hbOptions = {
  defaultLayout: "main",
  layoutsDir: "src/views/layouts",
  partialsDir: "src/views/partials",
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

app.engine("handlebars", expressHandlebars(hbOptions));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});
