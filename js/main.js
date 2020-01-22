$(document).ready(function() { 

  $('form').submit(function(event){
    event.preventDefault();
  });

  $('#addItemContainer').on('click', 'button', function() {
    var value = $('#addItemContainer input').val();
    var newItem = '<li class="itemWrapper"><input type="checkbox" class="checkbox"></input><div class="item"><p class="newItem">'+value+'</p><div class="remove fas fa-times"></div></li>';

    // $('#itemsContainer').append(newItem);
    // $('#itemsContainer').prepend(newItem); /* Add item in last place' */
    $(newItem).appendTo('#itemsContainer'); /* Other efficient method. */
  })

  $('#itemsContainer').on('click', '.remove', function() {
    var parent = $(this).parent().parent().remove();
  })

  // $('.checkbox').on('click', function() {
  //     $(this).parent().children().last().children().first().toggleClass('done');
  //   console.log('hi');
  // })
})