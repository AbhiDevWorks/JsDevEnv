var express = require("express");
var path = require("path");
var open = require("open"); //open the site in browser

var port = 3000;
var app = express(); //Instance of express

//Tell express which routes to handle
//This is the route
app.get("/", function(req, res) {
  //__dirname is a special variable that gives the directory that we are currently running in
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

//tell express to listen on port 3000
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
