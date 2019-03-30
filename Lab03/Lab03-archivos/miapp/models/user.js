var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
  usuario:String,
  clave: String
});
prod_model = mongoose.model('usuarios', producto_schema, 'usuarios');

module.exports = {
  show: function(req, res) {
    res.render('login');
  },
  logear: function(req, res) {
    /*prod_model.find({}, function(err, items) {
      var a = req.body.username;
      if(!err) {
        res.send(a);
        console.log(a);
      }else {
        return console.log(err);
      }
    });*/
    var a = req.username;
    console.log(a);
  }
};
