function add(a, b, callback) {
  var result = a + b;
  callback(result);
}

add(10, 10, function(result) {
  console.log("파라미터로 전달된 콜백 함수 호출됨");
  console.log("10+10:" + result);
});
