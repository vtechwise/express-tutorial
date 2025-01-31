const http = require("http");

const server = http.createServer((req, res) => {

    const url = req.url
    if (url == '/') {
         res.writeHead(200, { "content-type": "text/html" });
         res.write("<h1>this is the home page</h1>");
        res.end();
        return
    } 
    if (url == '/about') {
          res.writeHead(200, { "content-type": "text/html" });
          res.write("<h1>this is the about us page</h1>");
          res.end();
          return;
    }
     res.writeHead(404, { "content-type": "text/html" });
     res.write("<h1>Page not found </h1>");
     res.end();
   
});

server.listen(5000);
