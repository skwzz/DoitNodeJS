var result = 0;
console.time("duration_time");

for (var i = 0; i <= 10000; i++) {
  result += i;
}

console.timeEnd("duration_time");
console.log("1부터 10000까지 더한 결과물 : %d", result);

console.log("현재 실행한 파일 이름 : %s", __filename);
console.log("현재 실생한 파일의 패스 : %s", __dirname);

var Person = { name: "소녀시대", age: 20 };
console.dir(Person);
console.log("----------");
console.log(Person);
