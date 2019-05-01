var Users = [{ name: "소녀시대", age: 20 }, { name: "티아라", age: 21 }];
var add = function(a, b) {
  return a + b;
};
Users.push(add);

console.log("사용자 수 : %d", Users.length);
console.log("세 번째 함수 사용 : %d", Users[2](10, 11));
console.log(typeof Users[2]);
