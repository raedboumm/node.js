const http = require("http");
http
  .createServer(function (req, res) {
    res.write("hello world");
    res.end();
  })
  .listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
