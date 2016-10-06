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


/*
  article-list の hover trigger
*** */
var $jsPostTitle = $('.js-post-title');
var $jsPostThumb = $('.js-post-thumb');


$jsPostThumb.hover(
  function(e) {
    $(this).parents('.js-post-anchor').find('.js-post-title').addClass('a-text-hover');
  },
  function(e) {
    $(this).parents('.js-post-anchor').find('.js-post-title').removeClass('a-text-hover');
  }
);

$jsPostTitle.hover(
  function(e) {
    $(this).parents('.js-post-anchor').find('.js-post-thumb').addClass('a-img-hover');
  },
  function(e) {
    $(this).parents('.js-post-anchor').find('.js-post-thumb').removeClass('a-img-hover');
  }
);
