var http = require("http");

var server = http.createServer(function(req, res) {
  console.log("요청 발생");

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("   <head>");
  res.write("       <title> 응답 페이지 </title>");
  res.write("   </head>");
  res.write("   <body>");
  res.write("       <h1> This is Response from nodejs server");
  res.write("   </body>");
  res.write("</html>");
  res.end();
});

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

server.on("close", function() {
  console.log("서버가 종료됩니다.");
});
