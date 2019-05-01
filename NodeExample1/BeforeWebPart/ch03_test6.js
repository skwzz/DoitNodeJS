var Person = {};
Person.age = 20;
Person.name = "소녀시대";
var oper = function(a, b) {
  return a + b;
};
Person.add = oper;

console.log(Person.add(1110, 12));
