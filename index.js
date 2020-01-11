var express = require("express");
var bodyParser = require("body-parser");

var connection = require("./config");
var app = express();
var router = express.Router();

var authenticateController = require("./controllers/auth");
var registerController = require("./controllers/register");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

router.get("/login.html", function(req, res) {
  res.sendFile(__dirname + "/login.html");
});

router.get("/registersuccess", function(req, res) {
  res.redirect(req.baseUrl + "/registerSuccess.html");
});

console.log(authenticateController);
app.post("/controllers/register", registerController.register);
app.post("/controllers/auth", authenticateController.authenticate);
app.listen(8012);
