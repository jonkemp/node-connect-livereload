'use strict';

var connect = require('connect'),
    serveStatic = require('serve-static'),
    serveIndex = require('serve-index'),
    http = require('http'),
    opn = require('opn'),
    tinylr = require('tiny-lr'),
    watch = require('watch'),
    config = {
        app: 'app',
        port: 9000,
        lr: 35729
    };

var app = connect()
    .use(require('connect-livereload')({ port: config.lr }))
    .use(serveStatic(config.app))
    .use(serveIndex(config.app));

http.createServer(app)
    .listen(config.port)
    .on('listening', function() {
        console.log('Started connect web server on http://localhost:' + config.port + '.');

        opn('http://localhost:' + config.port);
    });

tinylr().listen(config.lr, function(err) {
    if (err) {
        return console.log(err);
    }
});

watch.createMonitor('./app/', function (monitor) {
    monitor.on('created', function (f, stat) {
        // Handle new files
    });
    monitor.on('changed', function (f, curr, prev) {
        // Handle file changes
        http.get('http://localhost:' + config.lr + '/changed?files=' + f, function () {
            console.log('File ' + f + ' was changed. Reloading.');
            console.log('Waiting...');
        });
    });
    monitor.on('removed', function (f, stat) {
        // Handle removed files
    });
});
