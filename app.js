const http = require("http");

const server = http.createServer((req, res) => {
  console.log("hit the server running");
  res.end("home page");
});

server.listen(5000);
