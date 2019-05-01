var Users = [
  { name: "소녀시대", age: 20 },
  { name: "티아라", age: 21 },
  { name: "블랙핑크", age: 20 }
];

console.log("length:" + Users.length);

for (var i = 0; i < Users.length; i++) {
  console.log(Users[i].name + "   " + Users[i].age);
}

console.log("USE FOREACH");

Users.forEach(function(item, idx) {
  console.log(idx + " : " + item.name);
});
