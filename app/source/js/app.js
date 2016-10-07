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
var $header = $('.js-header');
var lengthenFrag = false; // アニメーションqueueをためないためのFrag

$(window).scroll(function() {
  if ($(window).scrollTop() > 460) {
    if($header.hasClass('fixed')) { return; }
    shortenHeader();
  } else {
    if(!lengthenFrag) { return; }
    lengthenHeader();
  }
});

function shortenHeader () {
  $header.addClass('fixed');
  lengthenFrag = true;
  $header.animate({
    'top': '0'
  }, {
    duration: 300
  });
}

function lengthenHeader () {
  lengthenFrag = false;
  $header.animate({
    'top': '-66px'
  }, {
    duration: 100,
    complete: function() {
      $header.removeClass('fixed');
      $header.css('top', '0');
    }
  });

}

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
