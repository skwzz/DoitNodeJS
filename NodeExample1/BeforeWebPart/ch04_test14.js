var fs = require("fs");
fs.mkdir("./docs", 0666, function(err) {
  if (err) throw err;

  console.log("새로운 폴더를 생성함");

  fs.rmdir("./docs", function(err) {
    if (err) throw err;
    console.log("docs 폴더를 삭제함");
  });
});
