var Calc = require("./calc3");

var calc = new Calc();
console.log(calc.add(1, 2));
calc.emit("stop");

console.log(Calc.title + "에 stop 이벤트 전달");
