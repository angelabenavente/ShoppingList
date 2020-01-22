$(document).ready(function() { 

  $('form').submit(function(event){
    event.preventDefault();
  });

  $('#addItemContainer').on('click', 'button', function() {
    var value = $('#addItemContainer input').val();
    var newItem = '<li class="itemWrapper"><div class="checkbox"><i class="tick fas fa-check"></i></div><div class="item">' + value + '<div class="remove fas fa-times"></i></li>'

    // $('#itemsContainer').append(newItem);
    // $('#itemsContainer').prepend(newItem); /* Add item in last place' */
    $(newItem).appendTo('#itemsContainer'); /* Other efficient method. */
  })

  $('#itemsContainer').on('click', '.remove', function() {
    var parent = $(this).parent().parent().remove();
    // var check = $(this).closest('.checkbox').remove();
    // var check = $('#cat').closest('.category')
  })

})