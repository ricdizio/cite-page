 var cuadro = document.getElementById("longPicture");

function cambiarFoto(obj){
    var imgClick = obj ;
    cuadro.src = imgClick.getAttribute('src').toString();
    //alert("click: " + imgClick.getAttribute('src') +" cuadro : " + cuadro.src);
}
