var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friendsList = [" Sam", "Sarah", "Smiley", "Samsom", "Samuel"];

app.get("/", function (req, res){
  // res.send("<h1>this is the home page</h1>");
  res.render("home");
});

app.post("/addFriend", function (req, res){
  var newFriend = req.body.newfriend;
  friendsList.push(newFriend);
  
  res.redirect("/friends");

});

app.get("/friends", function (req,res){
 
  res.render("friends", {pals: friendsList});
});

app.get("/about/:word", function (req, res){
  var word = req.params.word;

  res.send(word);
});

app.listen(5000, function(){
  console.log("Server on line 5000");
});
