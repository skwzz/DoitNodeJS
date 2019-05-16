// express 모듈은 http 위에서 동작하므로 함께 불러야 한다
var express = require("express");
var http = require("http");

//익스프레스 객체 생성
var app = express();

//기본 포트를 app 객체에 속성으로 설정
app.set("port", process.env.PORT || 3000);

http.createServer(app).listen(app.get("port"), function() {
  console.log("STARTED EXPRESS SERVER. PORT IS " + app.get("port"));
});
