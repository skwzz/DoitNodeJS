var http = require("http");
var fs = require("fs");
var server = http.createServer();

var port = 3000;
server.listen(port, function() {
  console.log(" Running server {port}: " + port);
});

server.on("connection", function(socket) {
  var addr = socket.address();
  console.log(
    "클라이언트가 접속 했습니다 ADDRESS : " + addr.address + ":" + addr.port
  );
});

server.on("request", function(req, res) {
  console.log("요청 발생");

  var fileName = "./images/icons8-heart-balloon-96.png";
  var inFile = fs.createReadStream(fileName, { flags: "r" });

  inFile.pipe(res);
});

server.on("close", function() {
  console.log("서버가 종료됩니다.");
});
