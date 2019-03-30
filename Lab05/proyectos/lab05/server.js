var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    user = require('./models/user')
    port = process.env.PORT || 3000;

app.set('view engine','jade');

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
  res.render('main');
});

io.on('connection', function(socket) {
  console.log('Usuario conectado!');
  //Funcion para conseguir datos desde el jade
  socket.on('crear', function(data) {
    user.create(data, function(rpta) {
      io.emit('nuevo',rpta);
    })
  })
  //Funcion para agregar datos a la bd
  socket.on('nuevo', function(data) {
    fill(data);
  });
  var fill = function(data) {
    var $row = $('<tr id="'+data._id+'">');
    $row.append('<td>'+data._id+'</td>');
    $row.append('<td>'+data.first_name+'</td>');
    $row.append('<td>'+data.last_name+'</td>');
    $row.append('<td>'+data.timezone+'</td>');
    $row.append('<td>'+data.locale+'</td>');
    $row.append('<td>'+data.profile_pic+'</td>');
    $row.append('<td><button class="btn btn-success btn-sm" name="btnAct">Actualizar</button></td>');
    $row.append('<td><button class="btn btn-danger btn-sm" name="btnEli">Eliminar</button></td>');
    $row.data('data', data);
    $('table tbody').append($row);
  }
  //Funcion para avisar cuando alguien se desconecta
  socket.on('disconnect', function() {
    console.log('Usuario desconectado!');
  });
});


http.listen(port, function() {
  console.log('Servidor conectado en *:' + port);
});
