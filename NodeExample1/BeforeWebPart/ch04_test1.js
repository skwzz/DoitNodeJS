var url = require("url");
var queryString = require("querystring");

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse(
  "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=NodeJS"
);
// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log("주소 문자열 : %s", curStr);
console.dir(curURL);
console.log("\n");

// parse() : 요청 파라미터 문자열을 파싱하여 객체로 만들어줌
// stringify() : 객체 안에 들어있는 요청 파라미터를 다시 하나의 문자열로 바꿀 때 사용
var param = queryString.parse(curURL.query);
console.log(param);
console.log("요청 파라미터 중 query의 값 : " + param.query);
console.log("원본 요청 파라미터 : " + queryString.stringify(param));
