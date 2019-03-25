(function () {
  var Primo = function(variable) {
    var a = 0, primo = "No es primo", resp;
    return{
      "esPrimo": function() {
        for(var i = 1; i<(variable+1); i++){
          if(variable%i==0) {
            a++;
          }
        }
        if(a!=2) {
          return "No es primo"
        }else{
          return "Si es primo"
        }
      }
    }
  }
  var num = Primo(7);
  console.log(num.esPrimo());
}());
