var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport=require("passport");
var methodOverride= require("method-override");
var path = require('path');


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));

app.get("/", function(req, res){
	res.redirect("/maps");

});

app.get("/fir", function(req, res){
	res.redirect(path.join(__dirname + '/fir.html'));

});


app.get("/maps", function(req, res){
	res.sendFile(path.join(__dirname + '/MapAndLoc.html'));
});

app.listen( 3000, function(){
    console.log("Server Started !!!");

});
