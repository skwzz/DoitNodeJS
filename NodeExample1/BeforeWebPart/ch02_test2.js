console.log("argv 속성의 파라미터 수 : " + process.argv.length);
console.dir(process.argv);

if (process.argv.length > 2) {
  console.log("3번째 파라미터 값 : %s", argv[2]);
}

process.argv.forEach(function(item, index) {
  console.log(index + " : " + item);
});

for (var i = 0; i < process.argv.length; i++) {
  console.log(i + " : " + process.argv[i]);
}
