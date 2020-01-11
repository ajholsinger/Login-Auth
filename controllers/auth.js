var Cryptr = require("cryptr");
var prompt = require("prompt");
var connection = require("./../config");
var express = require("express");
var userData = "INSERT INTO accounts SET ?";

cryptr = new Cryptr("myTotallySecretKey");

module.exports.authenticate = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  connection.query("SELECT * FROM users WHERE email = ?", [email], function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.json({
        status: false,
        message: "Error with query request"
      });
    } else {
      if (results.length > 0) {
        decryptedString = cryptr.decrypt(results[0].password);
        if (password == decrytpedString) {
          res.json({
            status: true,
            message: "Successfully Authenticated"
          });
        } else {
          res.json({
            status: false,
            message: "Email and Password do not match"
          });
        }
      } else {
        res.json({
          status: false,
          message: "Email not found"
        });
      }
    }
  });
};
