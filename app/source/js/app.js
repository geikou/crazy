
// instagram 流し
var instaMargin = 0;
setInterval(function(){
	instaMargin--;
	$('.js-slider').css({
		'margin-top': instaMargin
	});
}, 40);


// topAnimation

function topAnime() {
	// 左側を動かす
	$('.js-left').animate({
		'left': '35vw'
	}, 2000);

	// 右側を動かす
	$('.js-right').animate({
		'right': '35vw'
	}, 2000);

}

setTimeout(function() {
	topAnime();
	setTimeout(function() {
		// 重なったら
		$('.js-circle').css({
			'background-color': '#7F7F7F',
			'border': '0',
			'color': 'rgba(0,0,0,0)'
		});
		$('.js-circle').animate({
			'width': '200vw',
			'height': '200vw',
			'top': '-50vw'
		}, 500, function() {
			$('.topAnime').fadeOut();
		});
	}, 2000);
}, 2000);
