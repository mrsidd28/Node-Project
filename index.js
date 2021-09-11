// fileSystem

const http = require("http");
http.createServer((request,response) => {
  console.log(request.headers);
  response.end("Hello Noddy!!!")
}).listen(3000);
