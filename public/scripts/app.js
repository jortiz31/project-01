//client side js


$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/sneakers',
    success: handleRecAllSneakers,
    error: handdleError
  });
  $('#sneaker-form form').on("submit", handleSneakerSubmit);
});

function handleSneakerSubmit(event){
  event.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    method: 'POST',
    url: '/api/sneakers',
    data: formData,
    success: handleFormSubmitRes
  });
  $(this).trigger('reset');

}

function handleFormSubmitRes(data){
  console.log("handleFormSubmitRes is getting data like: ", data);
  renderSneaker(data);
}

function handleRecAllSneakers(json){
    // console.log(json)
    json.forEach(renderSneaker);
}

function handdleError(){
  console.log('shits broke!');
}


function renderSneaker(sneaker) {
  console.log('rendering shoe:', sneaker);
  var source = $('#sneaker-template').html();
  var templateFunc = Handlebars.compile(source);
  newHTML = templateFunc(sneaker);
  $('#sneakers').prepend(newHTML);
}
