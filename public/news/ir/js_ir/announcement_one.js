//■announcement(お知らせ機能)用Ajax

// 指定されたJSON・Xmlのファイルから取得した
// データを保持する変数
var org_data;

// 新着情報アイコンを表示するかしないかの切替フラグ
var NewIconFlg = false;
// Newアイコンが表示される上限日付(現在の日時から何日前までかを指定する)
var NewIconLimit = -888;

// お知らせアイコンの親カテゴリ(news_type)/子カテゴリ(sub_type)の切替フラグ
// true：親カテゴリ(news_type)/false：子カテゴリ(sub_type)
var aFlg = false;
// IR資料アイコンの親カテゴリ(news_type)/子カテゴリ(sub_type)の切替フラグ
// true：親カテゴリ(news_type)/false：子カテゴリ(sub_type)
var iFlg = false;
// 短信・適時開示アイコンの親カテゴリ(news_type)/子カテゴリ(sub_type)の切替フラグ
// true：親カテゴリ(news_type)/false：子カテゴリ(sub_type)
var pFlg = true;
// 有報アイコンの親カテゴリ(news_type)/子カテゴリ(sub_type)の切替フラグ
// true：親カテゴリ(news_type)/false：子カテゴリ(sub_type)
var yFlg = true;

// 年度区切り月
var kugiri = 3;


//------------------------------
// JSON/Xmlから取得したデータを表示するメインAPI
//------------------------------
function drawDataArea(data,type) {

	var total = 0;

	// 各表示項目をループして表示/非表示を切り替える
//	for (var i in data.item) {
	for (i = 0; i < data.item_count; i++) {
		
		switch(data.item[i].news_type){

			case 'ir_material':
			dataType = data.item[i].sub_type;
			break;

			case 'ir_material_for_fiscal_ym':
			dataType = data.item[i].sub_type;
			break;
			
			case 'pr':
			dataType = 'press';
			break;
			
			default:
			dataType = data.item[i].news_type;
			break;
		}
		
		
		
		if (dataType == type) {
			if(dataType == 'ir_material_for_fiscal_ym2'){
				if(data.item[i].title.match('HTML')){
					continue;
				}
				
			}
					createData(data.item[i]);
					total += 1;
					break;
		}
// 大ヒントかも知らない！
		// if (dataType == 'press') {
		// 			createData(data.item[i]);
		// 			total += 1;
		// 			break;
		// }
// 大ヒントかも知らない！
	}
		
	if(total == 0){
	document.write('<dl><dt></dt><dd>掲載情報はございません</dd></dl>');
	}
}

// 年度作成
function createNendo(data){
		var nen = Number(data.item[i].date.substr(0,4));
		var tuki = Number(data.item[i].date.substr(5,2));
		// 書類開示の区切り月判定（表示年度の変わり目）
		if(tuki <= kugiri){
		nen = nen-1;
		}
	return nen;
}


//------------------------------
// 年月日と加算日からn日後、n日前を求める関数
//------------------------------
function GetComputeDate(DaySpan) {
	myD = new Date();
	myD = new Date(myD.getFullYear(), myD.getMonth(), myD.getDate() + DaySpan);

	myYear = myD.getFullYear();
	myMonth = myD.getMonth() + 1;
	myDate = myD.getDate();

	return myYear.toString() + formatNum(2, myMonth) + formatNum(2, myDate);
}
//------------------------------
// 各表示項目のdateの値(yyyy/MM/dd hh:mm:ss)を
// yyyyMMddにフォーマットして返す関数
//------------------------------
function GetFormatDate(date) {
	return date.substr(0, 4) + date.substr(5, 2) + date.substr(8, 2);
}
//------------------------------
// 表示桁数のフォーマット関数
//------------------------------
function formatNum(keta, num) {
	var src = new String(num);
	var cnt = keta - src.length;
	if (cnt <= 0) return src;
	while (cnt-- > 0) src = "0" + src; return src;
}

function GetItemCategory(item) {
	var nType = item.news_type;

	// お知らせの判別
	if (nType.indexOf("announcement") > -1) {
		return "announcement";
	}

	// IR書類の判別
	if (nType.indexOf("ir_material") > -1) {
		return "ir_material";
	}

	// 短信系書類の判別
	if (nType.indexOf("tanshin") > -1 || nType.indexOf("pr") > -1 || nType.indexOf("press") > -1) {
		return "press";
	}

	// 有報の判別
	if (nType.indexOf("yuho") > -1) {
		return "yuho";
	}

	return "";
}

//------------------------------
// 各カテゴリのカテゴリアイコンURLを取得する
//------------------------------
function GetCategoryIconUrl(item) {
	var cat = GetItemCategory(item);

	if (cat != null && cat != "") {
		switch (cat) {
			case "announcement":
				if (aFlg == true) {
					return "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/category_icon/" + item.news_type + ".gif";
				} else {
					return "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/category_icon/" + item.sub_type + ".gif";
				}
			case "ir_material":
				if (iFlg == true) {
					return "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/category_icon/" + item.news_type + ".gif";
				} else {
					return "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/category_icon/" + item.sub_type + ".gif";
				}
			case "press":
				if (pFlg == true) {
					return "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/category_icon/" + item.news_type + ".gif";
				} else {
					return "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/category_icon/" + item.sub_type + ".gif";
				}
			case "yuho":
				if (yFlg == true) {
					return "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/category_icon/" + item.news_type + ".gif";
				} else {
					return "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/category_icon/" + item.sub_type + ".gif";
				}
		}
	}


	return "";
}




//------------------------------
// JSON/Xmlから取得したデータの各項目を表示させる関数
// 表示データ作成(１データ毎)
// 【パラメータ】
// element：
// item：JSON/Xmlデータの各項目(item)
//------------------------------
function createData(item) {
	
//	document.write('<dl>');
	
	// 各表示項目の開示日付を表示する
//	document.write('<dt>');
//	document.write(item.format_date);
	
	// ファイル形式アイコン(<img>要素)を書き出す
//	document.write('<img src="' + GetCategoryIconUrl(item) + '" align="absbottom" />');
//	document.write('</dt>');
	
	
//	document.write('<dd>');
	
	
	// リンクが設定されている場合は、
	// リンクを設定した要素(<a>要素)を書き出す
	// 設定がない場合はタイトルのみを書き出す
	if (item.link.length > 0) {
		document.write('<a href="' + item.link + '" ' + item.new_target + ' target="_blank">');
		document.write(item.title);
		document.write('</a>');
	} else {
		document.write(item.title);
	}
	
	// ファイル形式アイコン(<img>要素)を書き出す
		
	// ファイルサイズを書き出す
	if (item.file_size.length > 0) {
		document.write('<img src="//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/filetype_icon/' + item.type + '.gif" align="absmiddle" style="padding:0 0.5em;"/>' + item.file_size + 'KB (' + item.format_date + ')');
	}
	
	// 新着情報アイコンを書き出す
	// 表示切替フラグがtrueで、かつ新着コンテンツの場合に表示
	var fDate = GetFormatDate(item.date);
	if (NewIconFlg && fDate >= GetComputeDate(NewIconLimit)) {
		document.write('<img src="//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/new_icon.gif" align="absmiddle" style="padding:0 0.5em;"/>');
	}

	// コメントが設定されている場合は書き出す
	if (item.comment.length > 0) {
		document.write('<div>' + item.comment + '</div>');
	}
	
	
//	document.write('</dd>');
	
//	var fDate = GetFormatDate(item.date);
//	if (NewIconFlg && fDate >= GetComputeDate(NewIconLimit)) {
//	document.write('<img src="/common/images/space.gif" width="3px" align="absmiddle">');	
//	document.write('<span style="color:#ff0000;">NEW</span>');
//	}
	
//	document.write('</dl>');
}

function GetItemCategory(item) {
	var nType = item.news_type;

	// お知らせの判別
	if (nType.indexOf("announcement") > -1) {
		return "announcement";
	}

	// IR書類の判別
	if (nType.indexOf("ir_material") > -1) {
		return "ir_material";
	}

	// 短信系書類の判別
	if (nType.indexOf("tanshin") > -1 || nType.indexOf("pr") > -1 || nType.indexOf("press") > -1) {
		return "press";
	}

	// 有報の判別
	if (nType.indexOf("yuho") > -1) {
		return "yuho";
	}

	return "";
}



//------------------------------
// CallBack関数
// 【！注意！】
// この関数の関数名と、
// JSON・Xmlに記載されているCallBack関数名は
// 必ず一致するように設定して下さい。
// また、関数名に「-」が入っている場合は、
// 「_」などに置き換えて下さい。
// (「_」は関数名に利用できないため)
//------------------------------
function eolparts_announcement_7(data) {
	// 取得データが存在しない場合は
	// 何も処理をせず
	if (data.item_count <= 0) {
		return;
	}

	// グローバル変数にデータを保持しておく
	org_data = data;

	// 
//	createSelect(data);
}

function eirParts(type){
	
	// 取得データの表示処理
	drawDataArea(org_data,type);
	
	
}


document.write('<script type="text/javascript" src="//ssl4.eir-parts.net/V4Public/EIR/3823/ja/announcement/announcement_7.js" charset="UTF-8"></script>');