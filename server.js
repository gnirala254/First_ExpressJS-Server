
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World!!</h1>");
})
app.get("/contact", function(req, res){
  res.send("contact me : gnirala254@@gmai.com");
})
app.get("/about", function(req, res){
  res.send("My name is Gautam Nirala, I am a web developer");
})
app.get("/hobbies", function(req, res){
  res.send("<ul><li>Poetry Writing</li><li>Poetry Reading</li><li>Watching Porn</li></ul>");
})

app.listen(3000, function(){
  console.log("server stared on port 3000");

});
