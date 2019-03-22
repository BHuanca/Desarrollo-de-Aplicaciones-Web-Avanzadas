(function() {

  var Album = function(can1, can2) {
    //console.log("ola");
    return{
      "tocados": [],
      "cantante": can1,
      "musica": can2,
      "play": function() {
        this.tocados.push(this.cantante, this.musica);
        //console.log(this.tocados);
        //console.log("Tocando " + this.cantante + " - " + this.musica);
        //console.log(this.cantante);
      }
    };
  };

  var MusicBox = function() {
    var filtrado = "";
    return{
      "enAlbum": [],
      "addAlbum": function(album) {
        //album.play();
        this.enAlbum.push(album.cantante + ' - '  + album.musica);
        console.log(this.enAlbum.length);
      },
      "favoriteAlbum": function() {
        /*for(var i = 0; i < this.enAlbum.length; i++) {
          if(this.enAlbum[i])
        }*/
      }
    };
  };


  var box = MusicBox(),
      a1 = Album("The Who", "Tomy"),
      a2 = Album("Tom Waits", "Closing Time"),
      a3 = Album("John Cale", "Paris 1919"),
      favorito;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play();
  a2.play();
  a1.play();

  favorito = box.favoriteAlbum();

  console.log("Tu album favorito es " + favorito);

}());
