//client side js


$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/sneakers',
    success: handleRecAllSneakers,
    error: handdleError
  });
  $(#sneaker-form form).on("submit" handleRecAllSneakers);
});



function renderShoe(shoe) {
  console.log('rendering shoe:', sneaker);



}
