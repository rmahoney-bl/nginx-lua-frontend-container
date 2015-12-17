var net = require('net');

// This server listens on a Unix socket at /var/run/mysocket
var unixServer = net.createServer(function(client) {
	console.log('client connected');

    // Add a 'data' event handler to this instance of socket
    client.on('data', function(data) {
        client.write('<html>' + data.toString('utf8') + '</html>' + '\n');
    });

    client.on('end', function() {
        console.log('client disconnected');
    });

});

unixServer.listen('./frontend.sock');

console.log('running');
