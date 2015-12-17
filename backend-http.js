var http = require('http');
var fs = require('fs');
var socketName = './tmp/backend.sock';

// give this process a custom name
process.title = 'nodeBeTest'

// clear the socket file
if (fs.existsSync(socketName)) {
    fs.unlinkSync(socketName);
}

// handle http requess
var handleRequest = function (req, res) {
    console.log(new Date().toISOString() + '    request received');
    res.writeHead(200, {'Content-Type': 'application/json'});
    d = new Date();
    res.end(JSON.stringify({time: d.toLocaleString() }));
};

// start server
var server = http.createServer(handleRequest);
server.listen(socketName);
console.log(new Date().toISOString() + '    server started');