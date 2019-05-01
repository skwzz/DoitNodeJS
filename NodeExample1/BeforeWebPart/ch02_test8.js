var path = require("path");

// 디렉터리 이름 합치기
var directories = ["users", "mike", "docs"];
var docsDirctory = directories.join(path.sep);
console.log(" join 사용 후 : %s", docsDirctory);

//디렉터리 이름과 파일 이름 합치기
var curPath = path.join(docsDirctory, "nodepad.exe");
console.log("파일패스 : %s", curPath);

var cc = __filename;
var dirname = path.dirname(cc);
var basename = path.basename(cc);
var extname = path.extname(cc);

console.log(dirname);
console.log(basename);
console.log(extname);
