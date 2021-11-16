const express = require("express");
const { signup, signin } = require("../controllers/auth");

const auth = express.Router();

auth.post("/signup", signup);
auth.get("/signin", signin);

module.exports = auth;
