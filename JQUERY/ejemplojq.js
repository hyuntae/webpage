
//var x = document.getElementById
$("#id1").click(function(){
    $(this).html("Hola");
})
 
$("#id2").dblclick(function(){
    $(this).html("Que tal?");
})

$("#id3").click(function(){
    alert("Bienvenido");
})

$( "p" ).click(function() {
  $( this ).slideUp();
});

$("#button").click(function(){
    alert($("#textbox").val()); //val() te regresa lo que escribiste dentro de la caja
})