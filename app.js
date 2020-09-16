var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/Lesson0", function(req, res){
    res.render("Lesson0.ejs");
});

app.get("/Lesson1", function(req, res){
    res.render("Lesson1.ejs");
});

app.get("/Lesson2", function(req, res){
    res.render("Lesson2.ejs");
});

app.get("/Lesson3", function(req, res){
    res.render("Lesson3.ejs");
});

app.get("/Contact", function(req, res){
    res.render("Contact.ejs");
});

app.get("/Sources", function(req, res){
    res.render("Sources.ejs");
});

app.get("*", function(req, res){
    res.render("ComingSoon.ejs");
});

app.listen(3000, function(){
    console.log("Server is Running!!! at http://localhost:3000");
});

