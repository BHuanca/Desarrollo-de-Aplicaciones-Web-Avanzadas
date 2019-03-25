var http = require('http'),
    fs = require('fs'),
    url = require('url');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    function enrutador(path, res) {
        fs.readFile(path, null, function(error, data) {
            if (!error) {
              res.write(data);
            }
            res.end();
        });
    }

    var path = url.parse(req.url).pathname;

    if(path=='/' || path=='/inicio') {
      enrutador('./inicio.html', res);
    }else if(path=='/galeria') {
      enrutador('./galeria.html', res);
    }else{
      res.writeHead(404);
      res.write("<h1>Ups! Pagina no encontrada</h1>");
      res.end();
    }

}).listen(8080);
