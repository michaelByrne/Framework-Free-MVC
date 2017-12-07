var http           = require('http');
var fs             = require('fs');

var port = process.argv[2] || 8888;

http.createServer((req, res ) => {


  var readStream = fs.createReadStream('public/index.html');
  res.writeHead(200);
  readStream.pipe(res);

}).listen(port, () => console.log("server running at 8888"));


