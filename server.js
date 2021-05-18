const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at a@aol.com");
});

app.get("/about", function(req, res){
  res.send("I'm making studying to be a web developer!")
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Baking</li><li>Watching crime shows</li><li>Being a mom</li></ul>")
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
