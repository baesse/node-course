var express = require('express');
var consign = require('consign');
var body_parse=require('body-parser')
var expressValidator=require('express-validator')
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(body_parse.urlencoded({extended:true}))
app.use(expressValidator())

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;