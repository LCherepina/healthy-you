
var fs = require('fs');
var ejs = require('ejs');


exports.Question_OneItem = ejs.compile(fs.readFileSync('./Frontend/Templates/Question_OneItem.ejs', "utf8"));

exports.Test_OneItem = ejs.compile(fs.readFileSync('./Frontend/Templates/Test_OneItem.ejs', "utf8"));
