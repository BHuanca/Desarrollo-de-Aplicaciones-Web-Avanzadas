var http = require('http');
var enrutador = require('./enrutador.js');

http.createServer(enrutador.handleRequest).listen(8080);
