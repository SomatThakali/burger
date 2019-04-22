const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

let PORT = process.env.PORT || 3600;

const app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
