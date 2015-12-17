var http = require('http');
var fs = require('fs');
var socketName = './tmp/frontend.sock';

// give this process a custom name
process.title = 'nodeFeTest'

// clear the socket file
if (fs.existsSync(socketName)) {
    fs.unlinkSync(socketName);
}

// handle http requess
var handleRequest = function (req, res) {
    console.log(new Date().toISOString() + '    request received');

    // read raw input
    var rawInput = '';
    req.on('data', function(d) {
        rawInput += d;
    });

    // send the response
    req.on('end', function() {
        var data = JSON.parse(rawInput);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<html><body>Time: ' +  data.time + '</body></html>');
    });
};

// start server
var server = http.createServer(handleRequest);
server.listen(socketName);
console.log(new Date().toISOString() + '    server started');