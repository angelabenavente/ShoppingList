$(document).ready(function() { 

  $('form').submit(function(event){
    event.preventDefault();
  });

  $('#addItemContainer').on('click', 'button', function() {
    var value = $('#addItemContainer input').val();
    var newItem = '<li class="item"> \
      <div class="remove">X</div>' + value + '</li>'

    $('#itemsContainer').append(newItem);
  })

})