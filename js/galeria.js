//galeria
$galeria = $('.galeria');
$galeria.find('.item').click(function (event) {
loadDatos($(this).find('img').attr('src'), $(this).find('.descripcion').html());
    $modal_galeria.show()
});

//modal galeria
$modal_galeria = $('.modal-galeria');
$modal_galeria.find('#btn-cerrar').click(function (event) {
    $modal_galeria.hide('slow');
});

var loadDatos = function (srcImg, descripcion) {
    $modal_galeria.find('img').attr('src',srcImg);
    $modal_galeria.find('#descripcion').html(descripcion);
}