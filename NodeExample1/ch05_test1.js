const http = require("http");

// Create Web Server
const server = http.createServer();

var host = "172.30.1.7";
var port = 3000;
server.listen(port, host, "50000", function() {
  console.log("STARTED WEB SERVER. PORT IS " + port);
  console.log("STARTED WEB SERVER. HOST IS " + host);
});
