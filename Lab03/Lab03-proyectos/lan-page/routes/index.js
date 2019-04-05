var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */

app.use(express.static('public'));

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
