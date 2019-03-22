var url = require('url');
var fs = require('fs');

function enrutador(path, res) {
    fs.readFile(path, null, function(error, data) {
        if (!error) {
          res.write(data);
        }
        res.end();
    });
}

module.exports = {
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(request.url).pathname;
      switch (path) {
          case '/':
              enrutador('./inicio.html', response);
              break;
          case '/inicio':
              enrutador('./inicio.html', response);
              break;
          case '/galeria':
              enrutador('./galeria.html', response);
              break;
          default:
              response.writeHead(404);
              response.write('Pagina no encontrada');
              response.end();
      }

  }
};
