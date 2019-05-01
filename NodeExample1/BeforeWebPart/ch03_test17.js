function add(a, b, callback) {
  var result = a + b;
  var count = 0;
  callback(result);

  var history = function() {
    count++;
    return "||" + count + "||" + a + "+" + b + "=" + result;
  };

  return history;
}

var add_history = add(10, 10, function(result) {
  console.log("callback Part");
});

console.log("결과값으로 받은 함수를 실행해보아용 \n" + add_history());

console.log("결과값으로 받은 함수를 실행해보아용 \n" + add_history());
console.log("결과값으로 받은 함수를 실행해보아용 \n" + add_history());
console.log("결과값으로 받은 함수를 실행해보아용 \n" + add_history());
// 함수 add의 count 변수에 계속 접근 가능함 (closer)
