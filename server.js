var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var exphbs = require("express-handlebars");
var app = express();
var port = 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
app.use(express.static('public'));


app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.listen(port, function () {
    console.log("listening on localhost:" + port);
})