var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/Lessons", function(req, res){
    res.render("Lessons");
});

app.get("/Lesson0", function(req, res){
    res.render("Lesson0");
});

app.get("/Lesson1", function(req, res){
    res.render("Lesson1");
});

app.get("/Lesson2", function(req, res){
    res.render("Lesson2");
});

app.get("/Lesson3", function(req, res){
    res.render("Lesson3");
});

app.get("/Contact", function(req, res){
    res.render("Contact");
});

app.get("/Sources", function(req, res){
    res.render("Sources");
});

app.get("*", function(req, res){
    res.render("ComingSoon");
});

app.listen(3000, function(){
    console.log("Server is Running!!! at http://localhost:3000");
});

