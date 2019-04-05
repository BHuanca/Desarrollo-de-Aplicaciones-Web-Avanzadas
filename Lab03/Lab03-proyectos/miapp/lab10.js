var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  producto = require('./models/prod'),
  usuarios = require('./models/user');
//var path = require('path');

//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('view engine','jade');

app.get('/', function(req, res) {
  res.send('Hola mundo');
});

/*app.get('/login', function(req, res) {
  res.render('login');
});*/

/*app.get('/table', function(req, res) {
  res.render('table');
});*/

app.get('/producto', producto.show);
app.post('/producto', producto.create);
app.post('/producto/update', producto.update);
app.post('/producto/delete', producto.delete);

app.get('/login', usuarios.show);
app.post('/login', usuarios.logear);

app.listen(9090, function() {
  console.log('Iniciando!');
});
