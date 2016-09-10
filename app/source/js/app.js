console.log('app.js loaded!');

var instaMargin = 0;
setInterval(function(){
	instaMargin--;
	$('.js-slider').css({
		'margin-top': instaMargin
	});
}, 40);
