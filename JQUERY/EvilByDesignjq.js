 $(function() {
    $( "#dialog" ).dialog();
  });
  
  $( "#dialog" ).dialog({
      
  buttons: [
    {
     
      text: "DA CLICK AQUI PARA RECLAMAR",
      
      icons: {
        primary: "ui-icon-heart"
      },
      click: function() {
          alert("VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS VIRUS ");
        $( this ).dialog();
      }
    }
  ]
 
});

function myFunction() {
    alert("Descargando Troyano...");
}

var x;

function changecolors() {
    x = 1;
    setInterval(change, 100);
}

function change() {
    if (x === 1) {
        color = "red";
        x = 2;
    }else if(x === 2) {
        color = "green";
        x = 3;
    } else {
        color= "yellow";
        x = 1;
    }

    document.body.style.background = color;
}
window.onload = changecolors;

$( "h4" ).click(function() {
 // $( this ).hide("drop", { direction: "down" }, "slow");
  alert("HA-HA");
});