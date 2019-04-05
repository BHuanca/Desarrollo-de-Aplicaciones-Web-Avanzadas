var express  = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res) {
  res.send("Hola mundo! en Express :)");
})

app.post('/', function(req,res) {
  res.sed("Llamada POST misma url");
})

app.put('/user', function(req,res) {
  res.sed("Recibimos un PUT /user");
})

app.delete('/user', function(req,res) {
  res.send("Recibimos un DELETE en /user");
})

app.listen(3000, function() {
  console.log("Aplicacion de ejemplo escuchando en el puerto 3000!");
});
