var http = require('http');

var handleRequest = function (req, res) {
    console.log('client connected');

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

var server = http.createServer(handleRequest);
server.listen('./frontend.sock');