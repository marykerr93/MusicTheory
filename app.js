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
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOpts = {
        from: "person", //ignored by gmail
        to: "marykatherinekerr@gmail.com",
        subject: "Music Theory Website Email",
        text: `${req.body.name} (${req.body.email}) says ${req.body.message}`
    }

    smtpTrans.sendMail(mailOpts, function(err) {
        console.log(err);
        if(err) {
            res.render("Lesson0");
        } else {
            res.render("home");
        }
    });
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

