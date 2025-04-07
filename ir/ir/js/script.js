///////////////////ファーストビューの設定//////////////////////////
function firstViewSizing() {
	var W = $("#slideFirst").width();
		H = $("#slideFirst").height();
	    h = .219 * W; 
		info = $("#information");
	$("#image01").css({width : W + "px", height :  h + "px"});
	$("#slideBox").css({ height :  h + "px"});
	var barHeight = $("#image01").height() -40;
	info.css({ top : barHeight });
}
	$(window).on('load resize', function() {
		firstViewSizing();
	});
