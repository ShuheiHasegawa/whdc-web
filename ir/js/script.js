// ///////////////////ファーストビューの設定//////////////////////////
function firstViewSizing() {
	var W = $("#slideFirst").width();
		H = $("#slideFirst").height();
	    h = .281 * W; 
	    h2 = 1 * W;
		info = $("#information");
		Ww = $(window).width();
		img = $("#slideBox").find("img");
		// imgPass = "http://test-www.acrodea.co.jp/new/image/";
		//imgPass = "https://acrodea.co.jp/image/";
		imgPass = "/image/";
		alt = img.attr("alt");

    var startDate2 = new Date(2022,1-1,1,00,00,00);
    var nowDate = new Date();
	//console.log("nowDate= "+nowDate)
	//console.log("startDate2= "+startDate2)
	
	if($("#topPage").length) {
		if( Ww <= 479) {
			$("#slideBox").css({ height :  h2 + "px"});
			$("#slideFirst").css({ height :  h2 + "px"});
			img.attr({"src" : imgPass + alt + "2022_480.png"});
			H = $("#slideFirst").height();
		} else {
			$("#slideBox").css({ height :  h + "px"});
			img.attr({"src" : imgPass + alt + "2022_768.png"});
			H = $("#slideFirst").height();
		}
	}else{
		$("#slideBox").css({ height :  h + "px"});
	}
	if($("#modalButton").length) {
		var modalButtonWidth = $("#modalButton").width();
			modalContent = $("#modalContent");
			modalContentWidth = modalContent.width();

		if( Ww <= 480 ) {
			modalContent.css({  width : W + "px",height : H + "px" });
			$("#modalButton").css({left : W - modalButtonWidth - 24});
		}else{
			modalContent.css({  width : W + "px",height : H + "px" });
			$("#modalButton").css({left : W - modalButtonWidth - 24});
		}
	}
}
	$(window).on('load resize', function() {
		firstViewSizing();
	});
// ///////////////////footerの読み込み/////////////

//$("#footerOutPut").load("/parts/footer.html");

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
		officerTable = officerButton.parent().next();
		officerName = $(".officerName");
		active = false;
		close = true;
	officerTable.hide();

		officerButton.each(function(){
				$(this).click(function() {
						$(this).parent().next().fadeToggle(200);
						$(this).find("span").toggleClass("turn");
				});
			});
}
// ////////////////////////スマホメニュー/////////////////////
	function menu() {
		var button = $("#menuButton");
			content = $("#menuContent");
			open = false;
			close = true;

			button.click(function() {
				if(open == false && close == true) {
				content.slideDown(200);
				open = true;
				close = false;
				return;
				}else if(open == true && close == false){
				content.slideUp(200);
				open = false;
				close = true;
				return;
				}
			});
	}


// ////////////////////////スマホメニュー(他の部分をタッチするとMENUしまう）/////////////////////
	$(document).click(function() {
		//$('#menuContent').hide();
						content.slideUp(200);
						open = false;
				close = true;
	});
