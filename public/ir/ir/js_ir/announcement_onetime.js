//■announcement(お知らせ機能)用Ajax

// 指定されたJSON・Xmlのファイルから取得した
// データを保持する変数
var org_data;
// 新着情報の判定基準フラグ(true：個数/false：日付)
var nFlg = true;
// 新着情報の個数基準値
var NumNew = 4;
// 新着情報の日付基準値(現在の日時から何日前までかを指定する)
var DayNew = 0;
// 新着情報アイコンを表示するかしないかの切替フラグ
var NewIconFlg = true;
// Newアイコンが表示される上限日付(現在の日時から何日前までかを指定する)
var NewIconLimit = -7;

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

// 半角=true そのまま=false
var z2h = false;

han = new Array(" ","1","2","3","4","5","6","7","8","9","0");
zen = new Array("　","１","２","３","４","５","６","７","８","９","０");

function zen2han(text){
	if(z2h){
		for(var ii=0;ii<zen.length;ii++){
			var regex = new RegExp(zen[ii], "g");
			text = text.replace(regex, han[ii]);
		}
	}
	return text;
}

//------------------------------
// JSON/Xmlから取得したデータを表示するメインAPI
//------------------------------
function drawDataArea(data) {
	// データ表示箇所のルートElementを取得する
	var elmDiv = document.getElementById('divDataArea');
//	if (null == elmDiv) {
//		elmDiv = document.createElement('div');
//		elmDiv.id = 'divDataArea';
//		document.body.appendChild(elmDiv);
//	}

	if (true == elmDiv.hasChildNodes()) {
		for (var i in elmDiv.childNodes) {
			if (null != elmDiv.childNodes[i].nodeName && undefined != elmDiv.childNodes[i].nodeName) {
				if (elmDiv.childNodes[i].nodeName.toUpperCase() == 'dl'.toUpperCase()) {
					elmDiv.removeChild(elmDiv.childNodes[i]);
					break;
				}
			}
		}
	}
	var elmDl = document.createElement('dl');
	elmDiv.appendChild(elmDl);

	var total = 0;

	// 各表示項目をループして表示/非表示を切り替える
	for (var i =0;i<data.item_count;i++) {
		// 対象の項目が新着情報に該当するかどうか判定する
		// ※新着かどうかの判定に使う基準値は
		//   ファイル上部の定数に定義してあるので、
		//   そこの値を編集して表示を調節して下さい。

		var IsNew = IsNewItem(i, data.item[i]);

			if (IsNew) {
				createData(elmDl, data.item[i], IsNew);
				total += 1;
			}

	}

	// データが１件も存在しない場合
	if (total == 0) {
		elmDl.appendChild(document.createTextNode('掲載情報はございません'));
	}
}
//------------------------------
// 各表示項目が新着情報に該当するかどうかを判定する
// 【パラメータ】
// i：各表示項目のIndex番号
// item：JSON/Xmlデータの各項目(item)
//------------------------------
function IsNewItem(i, item) {
	// nFlgがtrueの場合は個数で新着情報かを判定し、
	// falseの場合は基準日で新着情報かを判定する
	// ※ファイル上部の定数で定義しているので
	//   その値を切り替えて調整して下さい
	if (nFlg) {
		// 個数で新着情報を判定する
		if (i < NumNew) {
			return true;
		}
	} else {
		// 日付で新着情報を判定する

		// 各表示項目のdateの値をyyyyMMddにフォーマット
		var fDate = GetFormatDate(item.date);
		// 新着かどうか判定するための基準日を取得する
		var cDate = GetComputeDate(DayNew);

		if (fDate != null) {
			// 各表示項目のdateの値と新着の基準日と比較して
			// 新しければ新着とみなす
			if (fDate >= cDate) {
				return true;
			}
		}
	}

	// ここを通る場合は、必ず新着情報ではない
	return false;
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



//------------------------------
// JSON/Xmlから取得したデータの各項目を表示させる関数
// 表示データ作成(１データ毎)
// 【パラメータ】
// element：
// item：JSON/Xmlデータの各項目(item)
// IsNew：新着の項目かどうか
// ItemInd：各項目のIndex
//------------------------------
function createData(element, item, IsNew) {

	if(item.guid == "press_1541920" || item.guid == "press_1541921"){
		//生成しない
		NumNew ++;
	}
	else{

	// <dt>要素を新規に作成する
	var elmDt = document.createElement('h3');
	// 作成した<dt>要素に各表示項目の「format_date」の値を追加する
	elmDt.appendChild(document.createTextNode(item.format_date + "　NEWS"));
	var elmPara = document.createElement('p');
	// カテゴリの<img>要素を新規に作成する
	var elmImg = document.createElement('img');
	// 作成した<img>要素のsrc属性の設定を行う
	elmImg.setAttribute('src', GetCategoryIconUrl(item));

	// 作成した<img>要素のalign属性の設定を行う
	// elmImg.setAttribute('align', 'absmiddle');
	// 作成した<dt>要素に<img>要素を追加する
	elmPara.appendChild(elmImg);
	// パラメータで渡されてきた<dl>要素に<dt>要素を追加する
	// element.appendChild(elmDt);

	// <dd>要素を新規に作成する
		var elmDd = document.createElement('article');
		elmDd.className = 'news';
		elmDd.appendChild(elmDt);
		elmDd.appendChild(elmPara);

		var newsUl = document.createElement('ul');
		var newsLi1 = document.createElement('li');
		var newsLi2 = document.createElement('li');
		var newsLi3 = document.createElement('li');

		newsUl.appendChild(newsLi1);
		newsUl.appendChild(newsLi2);
		newsUl.appendChild(newsLi3);

		elmDd.appendChild(newsUl);
	// コメント
	if (item.comment.length > 0) {

		var text = item.comment;
		newsLi3.innerHTML = text;
		newsUl.appendChild(newsLi3);
	}
	// 各表示項目の「link」の値が設定されている場合は
	// <dd>要素に<a>要素を追加する
	// 「link」が設定されていない場合は
	// <dd>要素に各表示項目の「title」の値のみを追加する
	if (item.link.length > 0) {
		// <a>要素を新規に作成する
		var elmA = document.createElement('a');
		// 作成した<a>要素のhref属性に
		// 各表示項目の「link」の値を設定する
		elmA.href = item.link;
		// 作成した<a>要素のtarget属性に
		// 各表示項目の「new_target」の値を設定する
		elmA.target = item.new_target;
		// 作成した<a>要素のtarget属性に
		// 各表示項目の「title」の値を追加する
		// elmA.appendChild(document.createTextNode(item.title));
		// <dd>要素に<a>要素を追加する
		// elmDd.appendChild(elmA);
		elmA.appendChild(document.createTextNode( '詳細を見る' ));
		newsLi1.appendChild(document.createTextNode( zen2han(item.title) ));

		newsLi2.appendChild(elmA);
	} else {
		// <dd>要素に各表示項目の「title」の値を追加する
		elmDd.appendChild(document.createTextNode( zen2han(item.title) ));
		// elmDd.appendChild(document.createTextNode(item.title));
	}

	// ファイルタイプの<img>要素を新規に作成する
	var elmImg2 = document.createElement('img');
	elmImg2.style.width ='auto';
	elmImg2.style.height ='auto';
//	// 作成した<img>要素のsrc属性を設定する
	//elmImg2.setAttribute('src', "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/filetype_icon/" + item.type + ".gif");
	// if(item.type == "url"){
	 	elmImg2.setAttribute("src", "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/filetype_icon/space.gif");
	// }else{
	// 	elmImg2.setAttribute("src", "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/filetype_icon/" + item.type + ".gif");
	// }
	
//	// 作成した<img>要素のalign属性を設定する
	elmImg2.setAttribute('align', 'absmiddle');
//	// <dd>要素に<img>要素を追加する
	//elmA.appendChild(elmImg2);

	// <dd>要素にファイルサイズのテキスト要素を追加する
	if (item.file_size.length > 0) {
		elmA.appendChild(document.createTextNode('（' + item.file_size + 'KB）'));
	}

	element.appendChild(elmDd);

	}

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
	// alert(item.sub_type);
	if (cat != null && cat != "") {
		switch (cat) {
			case "announcement":
				if (aFlg == true) {
					return "ir/image_ir/" + item.news_type + ".png";
				} else {
					return "ir/image_ir/" + item.sub_type + ".png";
				}
			case "ir_material":
				if (iFlg == true) {
					return "ir/image_ir/" + item.news_type + ".png";
				} else {
					return "ir/image_ir/" + item.sub_type + ".png";
				}
			case "press":
				if (pFlg == true) {
					return "ir/image_ir/" + item.news_type + ".png";
				} else {
					return "ir/image_ir/" + item.sub_type + ".png";
				}
			case "yuho":
				if (yFlg == true) {
					return "ir/image_ir/" + item.news_type + ".png";
				} else {
					return "ir/image_ir/" + item.sub_type + ".png";
				}
		}
	}


	return "";
}

//------------------------------
// 【クロスブラウザ対応】
// 各ブラウザによって、
// 年度選択DropDownListへのイベントの追加方法が違うため、
// それをカバーするサポート関数
// 【パラメータ】
// Target：イベントの追加対象になるElement
// type：イベント名から「on」を除いた名前
// func：イベントが発生した時に実行させる関数
//------------------------------
function addEventListenerIR(target, type, func) {
	if(target.attachEvent) {
		// 【IE対応】イベント追加処理
		target.attachEvent("on" + type, func);
	} else if(target.addEventListener) {
		// 【FireFox対応】イベント追加処理
		target.addEventListener(type, func, true);
	} else {
		//イベントリスナが使えない場合は on○○ 属性を上書き
		target["on" + type] = func;
	}
}

function originalSize(){
	// 画像の本来の大きさを取得し反映させる関数
	var elmDiv = document.getElementById('divDataArea');
	var imgArr = elmDiv.getElementsByTagName('img');
	for(var i=0;i<imgArr.length;i++){
		var w = imgArr[i].width, h = imgArr[i].height ;
		
		if ( typeof imgArr[i].runtimeStyle !== 'undefined' ) {
			var run = imgArr[i].runtimeStyle;
			var mem = { w: run.width, h: run.height };  // keep runtimeStyle
			run.width  = "auto";
			run.height = "auto";
			w = imgArr[i].width;
			h = imgArr[i].height;
			run.width  = mem.w;
			run.height = mem.h;
				
			imgArr[i].width = w;
			imgArr[i].height = h;
		}
	}
}

//------------------------------
// CallBack関数
// ここでJSON/Xmlのデータを受け取る
// 【！注意！】
// この関数の関数名と、
// JSON・Xmlに記載されているCallBack関数名は
// 必ず一致するように設定して下さい。
// また、関数名に「-」が入っている場合は、
// 「_」などに置き換えて下さい。
// (「_」は関数名に利用できないため)
//------------------------------
function eolparts_announcement_8(data) {
	// 取得データが存在しない場合は
	// 何も処理をせず
	if (data.item_count <= 0) {
		org_data = '';
		document.write('<div style="margin:1em 0;">掲載情報はございません</div>');
		return;
	}

	// グローバル変数にデータを保持しておく
	org_data = data;

	// 取得データの表示処理
	drawDataArea(data);
	
	// 画像の本来の大きさを取得し反映させる関数
	originalSize();
}

document.write('<script type="text/javascript" src="//ssl4.eir-parts.net/V4Public/EIR/3823/ja/announcement/announcement_8.js" charset="UTF-8"></script>');
