$(document).ready(function() { 

  $('form').submit(function(event){
    event.preventDefault();
  });

  $('#addItemContainer').on('click', 'button', function() {
    var value = $('#addItemContainer input').val();
    var newItem = '<li class="item"> \
      <div class="remove">X</div>' + value + '</li>'

    // $('#itemsContainer').append(newItem);
    // $('#itemsContainer').prepend(newItem); /* Add item in last place' */
    $(newItem).appendTo('#itemsContainer'); /* Other efficient method. */
  })

  $('#itemsContainer').on('click', '.remove', function() {
    var parent = $(this).parent().remove();
  })

})