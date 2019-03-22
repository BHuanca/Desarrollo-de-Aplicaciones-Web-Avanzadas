var param_replacer = require('tecsup-dawa-bladimir-huanca');
var objetivo = "%hello% %world%! -- %world% %hello%";
var idioma = "es";
var reemplazos = {
  "en": {
    "hello": "Hello",
    'world': "World"
  },
  "es":{
    "hello": "Hola",
    "world": "Mundo"
  }
};

var resultado = param_replacer.replace(objetivo, reemplazos["en"]);
console.log(resultado);
