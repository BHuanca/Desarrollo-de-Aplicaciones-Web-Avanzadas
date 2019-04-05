var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var producto_schema = new Schema({
  nombre:String,
  descripcion: String,
  precio: String
});
prod_model = mongoose.model('producto', producto_schema, 'producto');

module.exports = {
  show: function(req, res) {
    prod_model.find({}, function(err, items) {
      if(!err) {
        //res.send(items);
        res.render('table', {data: items});
        console.log(items);
      }else {
        return console.log(err);
      }
    });

  },
  create: function(req, res) {
    var item = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio
    };
    var nuevo = new prod_model(item).save();
    res.render('producto',{title: 'Actualizar producto', tipo: "/producto/update", boton: "Grabar"});
  },
  update: function(req, res) {
    prod_model.findOne({}, function(err, producto) {
      producto.nombre = req.body.nombre;
      producto.descripcion = req.body.descripcion;
      producto.precio = req.body.precio;
      producto.save();
      // res.send(producto);
      res.render('producto',{title: 'Eliminar producto', tipo: "/producto/delete", boton: "Eliminar"});
    });
  },
  delete: function(req, res) {
    prod_model.findOne({}, function(err, producto) {
      producto.remove();
      res.send({status: true});
    });
  }
};
