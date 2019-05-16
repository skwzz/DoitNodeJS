/**
 * Router 객체를 이용해 라우팅 함수 등록하기
 *
 * (1) 웹 브라우저에서 http://localhost:3000/public/login2.html 페이지 열고 요청
 * (2) 크롬 브라우저의 Postman 앱이나 기타 POST 요청 도구를 사용하여 POST 방식으로 요청
 *
 * @date 2016-10-25
 * @author Mike
 */

var express = require("express"),
  http = require("http"),
  path = require("path");

var bodyParser = require("body-parser"),
  static = require("serve-static");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/public", static(path.join(__dirname, "public")));

var router = express.Router();

router.route("/process/login").post(function(req, res) {
  console.log("/process/login 처리함.");

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
  res.write("<h1>Express 서버에서 응답한 결과입니다.</h1>");
  res.write("<div><p>Param id : " + paramId + "</p></div>");
  res.write("<div><p>Param password : " + paramPassword + "</p></div>");
  res.write(
    "<br><br><a href='/public/login2.html'>로그인 페이지로 돌아가기</a>"
  );
  res.end();
});

app.use("/", router);

app.all("*", function(req, res) {
  res.status(404).send("<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
