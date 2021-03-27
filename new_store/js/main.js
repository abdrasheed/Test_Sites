// this function for add values from dropdown menu to hidden input.
$('.city_item').on('click',function (){
    console.log($(this).data('city'));
    $('.cities').text($(this).data('city'));
    $('#city_value').val($(this).data('city'));
})


$(".navbar-toggler").click(function () {
  $(".navbar-collapse").collapse("hide");
});

$('.gallary .thumbnails img').on('click',function(){
  $(this).addClass('selected').siblings().removeClass('selected');
  $('.master-image img').hide().attr('src',$(this).attr('src')).fadeIn(500)
  console.log($(this).attr('src'))
})
// counter product
$('.add').on('click',function(){
  var number = $('.number-counter').text();
  $('.number-counter').text(parseInt(number)+1);
})

$('.minus').on('click',function(){
  var number = $('.number-counter').text();
  if (parseInt(number) == 0){
    return false
  } else {
    $('.number-counter').text(parseInt(number)-1);
  }
  
})