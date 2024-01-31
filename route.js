const express = require("express");
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render("index");
});
module.exports = router;