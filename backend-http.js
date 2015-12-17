var http = require('http');

var handleRequest = function (req, res) {
    console.log('client connected');
    res.writeHead(200, {'Content-Type': 'application/json'});
    d = new Date();
    res.end(JSON.stringify({time: d.toLocaleString() }));
};

var server = http.createServer(handleRequest);
server.listen('./backend.sock');