const express = require("express");
const bodyParser = require("body-parser");
 const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  // console.log(req.body.cryptro);
  request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body) {
    var data = JSON.parse(body);
    var price = data.averages.week;
    console.log(price);

  });
});
app.listen(3000, function() {
  console.log("server is running on port:3000");
});
