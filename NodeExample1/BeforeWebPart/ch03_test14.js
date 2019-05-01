var Users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 21 },
  { name: "애프터스쿨", age: 22 },
  { name: "블랙핑크", age: 23 }
];

console.log("Length : " + Users.length);
console.log("원본 Users");
console.dir(Users);

var Users2 = Users.slice(1, 3);
console.log("복사본 Users2");
console.dir(Users2);

var Users3 = Users2.slice(1);
console.log("복사본 Users3");
console.dir(Users3);
