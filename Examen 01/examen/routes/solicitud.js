var express = require('express');
var router = express.Router();

/* GET home page. */

//app.use(express.static('public'));

router.get('/', function(req, res, next) {
  res.render('solicitud', { title: 'Solicitud de viaje' });
  //res.send('Estamos en inicio');
});

router.post('/', function(req, res, next) {
  //res.render('respuesta', { title: 'Agencia de viajes el Veloz' });
  res.send('Gracias por su apoyo :D');
});

module.exports = router;
