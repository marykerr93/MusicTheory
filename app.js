const express = require("express");
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//ROUTES

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

app.post("/Contact", function(req, res){
    const smtpTrans = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    if((req.body.website).length != 0) {
        res.render("home");
    } else {

        const mailOpts = {
            from: "person", //ignored by gmail
            to: "marykatherinekerr@gmail.com",
            subject: "Music Theory Website Email",
            text: `${req.body.name} (${req.body.email}) says ${req.body.message}`
        }

        smtpTrans.sendMail(mailOpts, function(err) {
            console.log(err);
            if(err) {
                res.render("contact");
            } else {
                res.render("home");
            }
        });
    }
});

app.get("/Sources", function(req, res){
    res.render("Sources");
});

app.get("*", function(req, res){
    res.render("ComingSoon");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running!");
});

