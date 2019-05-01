var fs = require("fs");

// 파일을 동기식 IO로 읽음 (파일을 다 읽을 때 까지 밑의 코드 실행 안함)
var data = fs.readFileSync("./package.json", "utf8");

console.log(data);

// 파일을 비동기식 IO로 읽음 ( 파일을 다 읽는 것이 끝나기 전에 밑의 코드가 실행됨. 파일을 다 읽으면 콜백함수 실행)
fs.readFile("./package-lock.json", "utf8", function(err, data) {
  console.log("ERROR IS : " + err);
  console.log(data);
});

console.log("프로젝트 폴더 안의 package-lock.json 파일을 읽도록 요청");
