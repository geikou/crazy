/*
  Instagram フィードを流す
*** */
var $instagramSlider = $('.js-instagram-slider');
var instagramSliderFrag = true;
var instagramMargin = 0;

setInterval(function(){
  if(!instagramSliderFrag) { return; }
  instagramMargin--;
  $instagramSlider.css( 'margin-top', instagramMargin );
}, 40);

$instagramSlider.hover(
  function(e) {
    instagramSliderFrag = false;
  },
  function(e) {
    instagramSliderFrag = true;
  }
)


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
  $header.addClass('fixed').css('top', '-66px');
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
    duration: 200,
    complete: function() {
      $header.removeClass('fixed').css('top', '0');
    }
  });
}

/*
  js-sp-header
*** */
var $navTrigger = $('.js-nav-trigger');
var $slideMenu = $('.js-slide-menu');
var slideMenuFrag = true;

$navTrigger.on('click', function() {

  if(!slideMenuFrag){ return; }
  slideMenuFrag = false; // アニメーションqueueをためない

  if(!$(this).hasClass('slide-menu-is-open')) {
    $navTrigger.addClass('slide-menu-is-open');
    $slideMenu.animate({
      'left': '0'
    }, {
      duration: 200,
      complete: function() {
        slideMenuFrag = true;

      }
    });
  } else {
    $navTrigger.removeClass('slide-menu-is-open');
    $slideMenu.animate({
      'left': '100vw'
    }, {
      duration: 200,
      complete: function() {
        slideMenuFrag = true;
      }
    });
  }
});

var $spHeader = $('.js-sp-header-gnav');
var windowHeight = $(window).height();
var spHeaderFrag = false; // アニメーションqueueをためないためのFrag

$(window).scroll(function() {
  if ($(window).scrollTop() > windowHeight/2) {
    if(spHeaderFrag) { return; }
    shortenSpHeader();
  } else {
    if(!spHeaderFrag) { return; }
    lengthenSpHeader();
  }
});

function shortenSpHeader () {
  spHeaderFrag = true;
  $spHeader.animate({
    'top': '0'
  }, {
    duration: 300
  });
}

function lengthenSpHeader () {
  spHeaderFrag = false;
  $spHeader.animate({
    'top': '-60px'
  }, {
    duration: 200,
  });
}


/*
  article-list の hover trigger
*** */
var $jsPostTitle = $('.js-post-title');
var $jsPostThumb = $('.js-post-thumb');

$jsPostThumb.hover(
  function(e) {
    $(this).parents('.js-post-anchor').find('.js-post-title-wrapper').addClass('a-text-hover');
  },
  function(e) {
    $(this).parents('.js-post-anchor').find('.js-post-title-wrapper').removeClass('a-text-hover');
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
