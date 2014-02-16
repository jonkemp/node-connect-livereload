var connect = require('connect'),
    http = require('http'),
    open = require('open'),
    tinylr = require('tiny-lr'),
    config = {
        app: 'app',
        port: 9000,
        lr: 35729
    };

var middleware = [
    require('connect-livereload')({ port: config.lr }),
    connect.static(config.app),
    connect.directory(config.app)
];

var app = connect.apply(null, middleware);

var server = http.createServer(app);

server
    .listen(config.port)
    .on('listening', function() {
        console.log('Started connect web server on http://localhost:' + config.port + '.');

        open('http://localhost:' + config.port);
    });

tinylr().listen(config.lr, function(err) {
    if(err) {
        return console.log(err);
    }
});