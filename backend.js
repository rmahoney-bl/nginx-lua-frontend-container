var net = require('net');

var server = http.createServer();
server.listen('/var/tmp/http.sock');

// This server listens on a Unix socket at /var/run/mysocket
var unixServer = net.createServer(function(client) {
	console.log('client connected');

    // Add a 'data' event handler to this instance of socket
    client.on('data', function(data) {
        client.write(JSON.stringify({data: data.toString('utf8')}));
    });

    client.on('end', function() {
        console.log('client disconnected');
    });

});

unixServer.listen('./backend.sock');

console.log('running');
