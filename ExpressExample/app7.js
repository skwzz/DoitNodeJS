var express = require("express");
var http = require("http");
var path = require("path");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var static = require("serve-static");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("short"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
  console.log("첫 번째 미들웨어에서 요청을 처리함");
  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
  res.write("<h1>Express 서버에서 응답한 결과입니다 </h1>");
  res.write("<div><p>Param id : " + paramId + "</p></div>");
  res.write("<div><p>Param password : " + paramPassword + "</p></div>");
  res.end();
});

app.use(function(req, res, next) {
  console.log("두 번째 미들웨어에서 요청 처리");
  res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
  res.end(
    "<h1>Express111 서버에서 응답한 결과입니다. --> " + req.user + "</h1>"
  );
});

http.createServer(app).listen(3000, function() {
  console.log("STARTED SERVER");
});
