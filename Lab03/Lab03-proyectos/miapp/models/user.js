var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
  usuario:String,
  clave: String
});
prod_model1 = mongoose.model('usuarios', producto_schema, 'usuarios');

var usuario = "";
var clave = "";

module.exports = {
  show: function(req, res) {
    res.render('login');
  },
  logear: function(req, res) {
    usuario = req.body.username;
    clave = req.body.password;
    prod_model1.findOne({usuario:usuario, clave:clave}, function(err, usuarios) {
      if(!usuarios) {
        res.send("CREDENCIALES INCORRECTAS");
      }else{
        res.render("producto", { title: 'Crear Producto', tipo: "/producto", boton: "Grabar"});
      }
    });
  }
};
