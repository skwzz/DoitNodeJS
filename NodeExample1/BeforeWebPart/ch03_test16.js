function add(a, b, callback) {
  var result = a + b;
  callback(result);

  var history = function() {
    return a + "+" + b + "=" + result;
  };

  return history;
}

var add_history = add(10, 10, function(result) {
  console.log("callback Part");
});

console.log("결과값으로 받은 함수를 실행해보아용 \n" + add_history());
