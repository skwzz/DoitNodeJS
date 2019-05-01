var util = require("util");
var EventEmitter = require("events").EventEmitter;

var Calc = function() {
  var self = this; // 프로토타입 객체 안에서는 this키워드를 이용해 자기 자신을 가리킬 수 있고, 그 객체 안에 정의된 속성에 접근 가능
  this.on("stop", function() {
    console.log("Calc에 stop event 전달됨");
  });
};

// Calc 객체가 이벤트 처리를 할 수 있도록 EventEmitter를 상속하도록 만듦. util 모듈의 inherits() 메소드를 사용
util.inherits(Calc, EventEmitter);
Calc.prototype.add = function(a, b) {
  // new 연산자를 사용해 객체의 인스턴스를 만들었을 때 add()를 사용 가능.
  return a + b;
};

module.exports = Calc;
module.exports.title = "calculator";
