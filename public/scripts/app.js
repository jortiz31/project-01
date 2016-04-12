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
  //add size handler
  $('#sneakers').on('click', '.add-size', handleAddSizeClick);
  //save size
  $('#saveSize').on('click', handleNewSizeSumbit);
  //deletes sneaker
  $('#sneakers').on('click', '.delete-sneaker', handleDeleteSneakerClick);
  //edit handler
  $('#sneakers').on('click', '.edit-sneaker', handleSneakerEditClick);
  //save changes
  $('#sneakers').on('click', '.save-sneaker', handleSaveChangesClick);
});

//edit button for a sneaker is clicked this happens
function handleSneakerEditClick(e){
  var $sneakerRow = $(this).closest('.sneaker');

  var sneakerId = $sneakerRow.data('sneaker-id');
  console.log('edit sneaker', sneakerId);

  //show the hidden save button
  $sneakerRow.find('.save-sneaker').toggleClass('hidden');
  //hide the edit button
  $sneakerRow.find('.edit-sneaker').toggleClass('hidden');
  //get the sneaker brand and replace its field with an input
  var sneakerBrand = $sneakerRow.find('span.sneaker-brand').text();
  $sneakerRow.find('span.sneaker-brand').html('<input class="edit-sneaker-brand" value="' + sneakerBrand +'"></input>');
  //get the sneaker style and replace its field with an input element
  var sneakerStyle = $sneakerRow.find('span.sneaker-style').text();
  $sneakerRow.find('span.sneaker-style').html('<input class="edit-sneaker-style" value="' + sneakerStyle +'"></input>');
  //get the releaseDate and replace its field with and input
  var releaseDate = $sneakerRow.find('span.sneaker-releaseDate').text();
  $sneakerRow.find('span.sneaker-releaseDate').html('<input class="edit-sneaker-releaseDate" value="' + releaseDate +'"></input>');
  //get the price and replace its field with and input
  var price = $sneakerRow.find('span.sneaker-price').text();
  $sneakerRow.find('span.sneaker-price').html('<input class="edit-sneaker-price" value="' + price +'"></input>');
}

function handleSaveChangesClick(e){
  var sneakerId = $(this).parents('.sneaker').data('sneaker-id');
  var $sneakerRow = $('[data-sneaker-id=' + sneakerId + ']');

  var data = {
    style: $sneakerRow.find('.edit-sneaker-style').val(),
    sneakerBrand: $sneakerRow.find('.edit-sneaker-brand').val(),
    releaseDate: $sneakerRow.find('.edit-sneaker-releaseDate').val(),
    price: $sneakerRow.find('.edit-sneaker-price').val()
  };
  console.log("PUTTING data for sneaker", sneakerId, "with data", data);

  $.ajax({
    method: "PUT",
    url: '/api/sneakers/' + sneakerId,
    data: data,
    success: handleSneakerUpdatedResponse
  });
}

function handleSneakerUpdatedResponse(data) {
  console.log('response to update', data);

  var sneakerId = data._id;
  $('[data-sneaker-id=' + sneakerId + ']').remove();
  renderSneaker(data);

  $('[data-sneaker-id=' + sneakerId  + ']')[0].scrollIntoView();
}

function handleDeleteSneakerClick(e){
  var sneakerId = $(this).parents('.sneaker').data('sneaker-id');
  console.log("this should delete the sneaker " + sneakerId);
  $.ajax({
    url: '/api/sneakers/' + sneakerId,
    method: 'DELETE',
    success: handleDeleteSneakerSuccess
  });
}
//callback after delete takes place on /api/sneakers/:id
function handleDeleteSneakerSuccess(data){
  var deletedSneakerId = data._id;
  console.log("removing this sneaker from the page", deletedSneakerId);
  $('[data-sneaker-id=' + deletedSneakerId + ']').remove();
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
  console.log('add size shit works!');
  var thisSneakerId = $(this).closest('.sneaker').data('sneaker-id');
  console.log('id:', thisSneakerId);
  $('#sizeModal').data('sneaker-id', thisSneakerId);
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
