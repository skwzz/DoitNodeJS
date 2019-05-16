const express = require("express");
const http = require("http");

const app = express();

app.use(function(req, res) {
  console.log("첫 번째 미들웨어에서 요청 처리");

  var userAgent = req.header("User-Agent");
  var paramName = req.query.name;
  console.log(paramName);

  res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
  res.write(
    "<h1>Express 서버에서 응답한 결과입니다. --> " + userAgent + "</h1>"
  );
  res.write(
    "<h1>Express 서버에서 응답한 결과입니다. --> " + paramName + "</h1>"
  );
  res.send();
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
