var Cryptr = require("cryptr");
var express = require("express");
var connection = require("./../config");
var userData = "INSERT INTO accounts SET ?";
var prompt = require("prompt");

module.exports.register = function(req, res) {
  var today = new Date();
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var created_at = today;
  var updated_at = today;
  //var encryptedString = Cryptr.encrypt(req.body.password);
  var users = {
    name,
    email,
    password,
    created_at,
    updated_at
  };

  connection.query(userData, users, function(error, req, res, field) {
    if (error) {
      throw error;
    }
  });
};
