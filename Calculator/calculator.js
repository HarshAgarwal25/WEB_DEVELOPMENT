const express = require("express");
const app = express();
app.get("/",function (req, res){
  res.send("Hello !");
});
app.get("/about",function (req, res){
  res.send("nothing !");
});
app.listen(3000,function () {
  console.log("server port :3000");
});
