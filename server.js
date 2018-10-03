const liveServer = require('live-server');
const path = require('path');
const url = require('url');

var params = {
    port: 3333,
    host: '127.0.0.1',
    root: '.',
    open: true,
    file: 'index.html'
};

liveServer.start(params);

