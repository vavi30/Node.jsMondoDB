var http = require('http');
var dt = require('./ex_2');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("averge: " + dt.avarage(123,321));
    res.end();
}).listen(8080);
