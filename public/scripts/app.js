//client side js
$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/sneakers').success(function(sneakers) {
    sneakers.forEach(function(sneakers) {
      renderSneaker(sneakers);
    });
  });
  $('#sneaker-form form').on("submit", function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
    $.post('/api/sneakers', formData, function(sneakers) {
      // console.log('sneaker upon POST', sneakers);
      renderSneaker(sneakers);
      });
    $(this).trigger('reset');
  });

  $('#sneakers').on('click', '.add-size', handleAddSizeClick);
  // TODO: fix this!
  $('#saveSize').on('click', handleNewSizeSumbit);
  //deletes sneaker
  $('#sneakers').on('click', '.delete-sneaker', handleDeleteSneaker);

});

function handleDeleteSneaker(e){
  var sneakerId = $(this).parents('.sneaker').data('album-id');
  console.log("this should delete the sneaker " + sneakerId);
  $.ajax({
    url: '/api/sneakers/' + sneakerId,
    method: 'DELETE',
    success: handleDeleteSneakerSuccess
  });
}

function handleDeleteSneakerSuccess(data){
  var deletedSneakerId = data._id;
  console.log("removing this sneaker from the page", deletedSneakerId);
  $('div[data-sneaker-id=' + deletedSneakerId + ']').remove();
}

function renderSneaker(sneaker) {
  // console.log('rendering shoe:', sneaker);
  var source = $('#sneaker-template').html();
  var templateFunc = Handlebars.compile(source);
  newHTML = templateFunc(sneaker);
  $('#sneakers').prepend(newHTML);
}

//when the size button is clicked, display modal goes up
function handleAddSizeClick(e) {
  // console.log('add size shit works!');
  var currentSneakerId = $(this).closest('.sneaker').data('sneaker-id');
  console.log('id', currentSneakerId);
  $('#sizeModal').data('sneaker-id', currentSneakerId);
  $('#sizeModal').modal(); //pop up modal
}

function handleNewSizeSumbit(event){
  event.preventDefault();
  var $modal = $('#sizeModal');
  var $sizeField = $modal.find('#sneakerSize');

  var dataToPost = {
    size: $sizeField.val()
  };
  var sneakerId = $modal.data('sneakerId');
  console.log('retreived sneakerSize:', sneakerSize, 'for sneaker with id: ', sneakerId);
  //post to server
  var sizePostToServer = '/api/sneakers/' + sneakerId + '/size';
  $.post(sizePostToServer, dataToPost, function(data) {
    console.log('received data from post to /size:', data);
    //clear form
    $sizeField.val('');

    //close modal
    $modal.modal('hide');
    //update the right sneaker to show the new size
    $.get('/api/sneakers/' + sneakerId, + function(data) {
      //remove instanse of sneaker from page
      $('[data-sneaker-id=' + sneakerId + ']').remove();
      //re-render with new sneaker data (including sizes);
      renderSneaker(data);
    });
  }).error(function(err){
    console.log('post to /api/sneakers/:sneakerId/sizes had an error', err);
  });
}
