/**
 * Flipsnap用セッティング
**/
function setFlipsnap() {
	/* スライドレイアウト調整 */
	var Width = $("#slide_box").innerWidth();

	$(".item > div").css({ "width":"100%", "height": "auto" });

	var item_width = Width * 1.0;
	var item_margin = Width * 0;
	var slide_distance = Width * 1.0;

	var item_length = $(".item").length;
	var items = Width % slide_distance;
	var inner_width = ((item_width + item_margin) * item_length) + item_margin;

	$(".inner").css({ "width": inner_width });
	$(".item").css({ "width": item_width, "margin-left": item_margin });
	$(".item:first").css({ "margin-left": item_margin });

	/* Flipsnap設定 */
	var $pointer = $('.indicator span');
	var flipsnap = Flipsnap('.inner', { distance: slide_distance });
	var maxPoint = 3;

	flipsnap.element.addEventListener('fspointmove', function() {
		$pointer.filter('.fourcus').removeClass('fourcus');
		$pointer.eq(flipsnap.currentPoint).addClass('fourcus');
	}, false);

	var $next = $("#slide_box").find(".next").click(function(){flipsnap.toNext();});
	var $prev = $("#slide_box").find(".prev").click(function(){flipsnap.toPrev();});
	flipsnap.element.addEventListener('fspointmove', function() {
		$next.attr("disabled", !flipsnap.hasNext());
		$prev.attr("disabled", !flipsnap.hasPrev());
	}, false);
}

/**
 * インジケーターの書き出し
**/
function writeIndicator() {
	var item_length = $(".item").length;
	
	for(var i = 0; i < item_length; i++){
		$("<span></span>").appendTo(".indicator");
	}
	$(".indicator > span:first").addClass("fourcus");
}