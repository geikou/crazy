/*
  Instagram フィードを流す
*** */
var instaMargin = 0;
setInterval(function(){
  instaMargin--;
  $('.js-slider').css({
    'margin-top': instaMargin
  });
}, 40);


/*
  headerのスクロール制御
*** */
var $header = $('.header');
$(window).scroll(function() {
  if ($(window).scrollTop() > 360) {
    $header.addClass('fixed');
    $('.wrapper').css( 'padding-top', 360 );
  } else {
    $header.removeClass('fixed');
    $('.wrapper').css( 'padding-top', 0 );
  }
});
