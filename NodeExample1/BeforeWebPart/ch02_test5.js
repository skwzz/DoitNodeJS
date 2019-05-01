var calc = require("./calc");
var calcFolder = require("./calcFolder");
var calc2 = require("./calc2");
console.log("모듈로 분리한 후 -calc.add 함수 호출 결과 : %d", calc.add(15, 11));

console.log(
  "require 안의 이름을 가진 파일이 없다면 해당 이름의 폴더를 찾아 index.js를 찾아감 : %d",
  calcFolder.add(11, 15)
);

console.log("-calc2 호출 : %d", calc2.add(11, 1));
