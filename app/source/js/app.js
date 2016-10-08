/*
  Instagram フィードを流す
*** */

// jQueryオブジェクトを取得
var $instagramSlider = $('.js-instagram-slider');
// postの個数
var $instagramDataLength = $('.js-instagram-data').length;
// hoverされてるかどうかのFrag
var isHover = false;
// translateYの値
var instagramTranslateY = 0;

var called = false;

setInterval(function(){
  if(isHover) { return; } // hoverしてるときは離脱する

  translateY(); // 移動させる関数を呼ぶ

  // 移動によって最底辺まできたらDOMを下に追加する
  if (instagramTranslateY > $instagramDataLength*242 - 550) {
    if (!called) {
      called = true;
      addInstagramPost();  // DOM追加
    }
  }

}, 50);

function addInstagramPost () {
  $instagramSlider.append($instagramSlider.html());
}

function translateY () {
  // 50msに1px上に移動していく
  $instagramSlider.css( 'transform', 'translateY(-'+instagramTranslateY+'px)' );
  instagramTranslateY++;
}


// hoverのときに流れを止める
$instagramSlider.hover(
  function(e) { isHover = true; },
  function(e) { isHover = false; }
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
