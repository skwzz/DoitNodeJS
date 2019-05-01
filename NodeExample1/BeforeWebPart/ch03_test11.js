/*
  Array Object Method

  push(object) : 배열 끝에 요소 추가
  pop() : 배열 끝에 요소 삭제
  unshift() : 배열 앞에 요소 추가
  shift() : 배열 앞의 요소 삭제
  splice(index, removeCnt, [Object]) : 여러 개의 객체를 요소로 추가하거나 삭제
  slice(index, copyCount) : 여러 개의 요소를 잘라내어 새로운 배열 객체로 만듦
*/

var Users = [
  { name: "소녀시대", age: 20 },
  { name: "티아라", age: 21 },
  { name: "에이핑크", age: 22 }
];

var printArr = function(arr) {
  arr.forEach(function(item, idx) {
    console.log(idx + ":" + item.name);
  });
  console.log("");
};
console.log(Users.length);

Users.push({ name: "꼽사리", age: 111 });
console.log(Users.length);

Users.shift();
console.log(Users.length);

delete Users[1];

printArr(Users);

Users.splice(1, 0, { name: "테스트", age: 1234 });
printArr(Users);
Users.splice(2, 1);
printArr(Users);
