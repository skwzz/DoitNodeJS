var express = require("express");
var http = require("http");
var path = require("path");

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");
var static = require("serve-static");
var expressErrorHandler = require("express-error-handler");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "my key",
    resave: true,
    saveUninitialized: true
  })
);

app.use("/public", static(path.join(__dirname, "public")));

var router = express.Router();

router.route("/process/showCookie").get(function(req, res) {
  console.log("/process/showCookie 호출됨");
  res.send(req.cookies);
});

router.route("/process/setUserCookie").get(function(req, res) {
  console.log("/process/setUserCookie 호출됨");
  //SET COOKIE
  res.cookie("users", {
    id: "mike",
    name: "소녀시대",
    authorized: true
  });
  res.redirect("/process/showCookie");
});

router.route("/process/users/:id").get(function(req, res) {
  console.log("/process/users/:id 처리함.");

  var paramId = req.params.id;
  console.log("/process/users와 토큰 " + paramId + "를 이용해 처리함");

  res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
  res.write("<h1>Express 서버에서 응답한 결과입니다.</h1>");
  res.write("<div><p>Param id : " + paramId + "</p></div>");
  res.end();
});

router.route("/process/product").get(function(req, res) {
  console.log("/process/product 호출됨");
  if (req.session.user) {
    res.redirect("/public/product.html");
  } else {
    res.redirect("/public/login2.html");
  }
});

router.route("/process/login").post(function(req, res) {
  console.log("/process/login 호출");

  var paramId = req.body.id || req.query.id;
  var paramPassword = req.body.password || req.query.password;

  if (req.session.user) {
    console.log("이미 로그인 되어 상품 페이지로 이동합니다");
    res.redirect("/public/product.html");
  } else {
    req.session.user = {
      id: paramId,
      name: "소녀시대",
      authorized: true
    };
    res.writeHead("200", { "Content-Type": "text/html;charset=utf8" });
    res.write("<h1>로그인 성공</h1>");
    res.write("<div><p>Param id : " + paramId + "</p></div>");
    res.write("<div><p>Param password : " + paramPassword + "</p></div>");
    res.write("<br><a href='/process/product'>상품 페이지로 이동하기</a>");
    res.end();
  }
});

router.route("/process/logout").get(function(req, res) {
  console.log("/process/logout 호출됨");
  if (req.session.user) {
    console.log("로그아웃합니다");
    req.session.destroy(function(err) {
      if (err) {
        throw err;
      }
      console.log("세션을 삭제하고 로그아웃 되었습니다.");
      res.redirect("/public/login2.html");
    });
  } else {
    console.log("아직 로그인 안됬습니다");
    res.redirect("/public/login2.html");
  }
});

app.use("/", router);

var errorHandler = expressErrorHandler({
  static: {
    "404": "./public/404.html"
  }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
