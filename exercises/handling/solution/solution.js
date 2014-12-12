var Hapi = require('hapi');
var server = new Hapi.Server();
var path = require('path');
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: path.join(__dirname, '/index.html')
    }
});
server.start();
