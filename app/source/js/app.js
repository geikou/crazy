
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
	}, 1000);

	// 右側を動かす
	$('.js-right').animate({
		'right': '35vw'
	}, 1000);
}

setTimeout(function() {
	topAnime();
	setTimeout(function() {
		// 重なったら
		$('.js-circle').css({
			'color': 'rgba(0,0,0,0)'
		});

		$('.js-top-logo').animate({
			'opacity': '1'
		}, 500);

		setTimeout(function() {
			$('.js-left').hide();
			$('.js-right').animate({

			}, 1000);
			$('.js-right').animate({
				'width': '200vw',
				'height': '200vw',
				'right': '-50vw',
				'top': '-50vw'
			}, 500, function() {
				$('.topAnime').fadeOut();
			});			
		}, 1000);
	}, 2000);
}, 2000);
