var express = require('express');
var router = express.Router();

/* GET home page. */

//app.use(express.static('public'));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Agencia de viajes el Veloz' });
  //res.send('Estamos en inicio');
});

module.exports = router;
