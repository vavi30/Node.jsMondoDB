var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.write(uc("uki is the best place to learn programming!"));
    res.end();
}).listen(8080);
