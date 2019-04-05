$( document ).ready(function() {

  $( "#obtener" ).click(function() {
    $( this ).hide( 10 );
    $( "#loader" ).show( "slow" );
    setInterval(imagen, 2000);
  });

  function imagen(){
    $('#loader').hide( 10 );
    $( "#entregar" ).show( "slow" );
    setInterval(recargar, 3000);
  }

  function recargar(){
    location.reload();
  }

});
