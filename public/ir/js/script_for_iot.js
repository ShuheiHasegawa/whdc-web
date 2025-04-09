// ///////////////////ファーストビューの設定//////////////////////////
function firstViewSizing() {
	var W = $("#slideFirst").width();
		H = $("#slideFirst").height();
	    h = .425 * W; 
		info = $("#information");
	$("#image01").css({width : W + "px", height :  h + "px"});
	$("#slideBox").css({ height :  h + "px"});
	var barHeight = $("#image01").height() -40;
	info.css({ top : barHeight });
	// //社名の由来モーダルがあった場合（会社情報ページ）////
	if($("#modalButton").length) {
		var modalButtonWidth = $("#modalButton").width();
			modalContent = $("#modalContent");
			modalContentWidth = modalContent.width();
		$("#modalButton").css({left : W - modalButtonWidth - 24});
		modalContent.css({left : W - modalContentWidth - 50});
	}
}
	$(window).on('load resize', function() {
		firstViewSizing();

	});
// ///////////////////footerのトグルスライダーと部品の読み込み/////////////
	$(function(){
	$("#footerOutPut").load("../parts/footer.html", function() {
		$("#siteMapButton").click(function(){
			$("#siteMap").toggleClass("active");
			$(this).find("#arrow").toggleClass("turn");
		});
	});			
});

// ///////////////社名の由来モーダル///////////////////////////////

if($("#modalButton").length) {
	function modal() {
		var modalButton = $("#modalButton");
			closeButton = $("#modalClose");
			modalContent = $("#modalContent");

			modalButton.click(function() {
				modalContent.fadeIn(400);
			});
			closeButton.click(function() {
				modalContent.fadeOut(400);
			});
	}
	modal();
}

// //////////////////////役員名簿の開閉////////////////////

function officerTable() {
	var officerButton = $(".tableBox").find("p");
		officertarget = officerButton.next();
		active = false;
		close = true;
	officertarget.hide();

		officerButton.each(function(){
				$(this).click(function() {
						if(close && !active) {
							$(this).attr('data-arrow','▲');
							$(this).next().fadeIn(200);
							active = true;
							close = false;
							return;
						}
						if(active && !close) {
							$(this).attr('data-arrow','▼');
							$(this).next().fadeOut(200);
							active = false;
							close = true;
							return;						
						}
				});
			});
}
