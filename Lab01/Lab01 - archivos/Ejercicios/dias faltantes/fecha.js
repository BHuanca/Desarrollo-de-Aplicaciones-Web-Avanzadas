var http = require('http'),
    fs = require('fs');

var fecha = [];

var ano = "",
mes = "",
dia = "";

http.createServer(function(req, res) {
  fs.readFile('./form2.html', function(err, html) {
    var html_string = html.toString();

    var hoy = new Date();

    if(req.url.indexOf('?')>0) {
      var url_data = req.url.split('?');
      fecha = url_data[1].split('-');
    }

    var ano_hoy = hoy.getFullYear();
    var mes_hoy = hoy.getMonth()+1;
    var dia_hoy = hoy.getDate();

    ano = fecha[0];
    mes = fecha[1];
    dia = fecha[2];

    var segundos_ingresado = Date.parse(ano+'-'+mes+'-'+dia);
    var segundos_hoy = Date.parse(ano_hoy+'-'+mes_hoy+'-'+dia_hoy);

    var diferencia = (segundos_ingresado-segundos_hoy)/(1000*60*60*24);
    var dias_faltantes = Math.round(diferencia);

    html_string = html_string.replace('{dia}',dias_faltantes);
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(html_string);

    res.end();

  });
}).listen(8080);
