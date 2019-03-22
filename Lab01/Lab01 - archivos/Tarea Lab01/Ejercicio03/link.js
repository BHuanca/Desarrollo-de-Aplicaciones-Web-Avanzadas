var http = require('http'),
    fs = require('fs');

var parametros = [],
valores = [],
arreglo_parametros = []
indice = [];

http.createServer(function(req, res) {

  fs.readFile('./form.html', function(err, html) {
    var html_string = html.toString();
    //html_string = html_string.replace('{hora1}',comp1);

    /*if(req.url.indexOf('/')>0) {
      var url_data = req.url.toString();
      indice = url_data[1];
      console.log(url_data);
    }*/
    var a = req.url.indexOf('/').split('/');
    var b = a[1].toString();
    console.log(b);


    res.writeHead(200,{'Content-type':'text/html'});
    res.write(html_string);
    res.end();



  });

/*
  fs.readFile('./galeria.html', function(err, html) {
    var html_string = html.toString();
    //html_string = html_string.replace('{hora1}',comp1);
    res.writeHead(200,{'Content-type':'text/html'});

    res.write(html_string);
    res.end();
  });*/

}).listen(8080);
