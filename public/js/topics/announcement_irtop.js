//■announcement(お知らせ機能)用Ajax
console.log("announcement_irtop.js");

//////////////
// 設定項目 //
//////////////

// 年度リストの出力方法フラグ
var yearList = -1; // 0の時はメニューリンク、1の時はプルダウン、それ以外の時は表示しない
// 表示数を制限するかどうか
var irTop = true;
// 表示する書類数
var NewNum = 3;
// 新着情報アイコンを表示するかしないかの切替フラグ
var NewIconFlg = true;
// Newアイコンが表示される上限日付(現在の日時から何日前までかを指定する)
var NewIconLimit = -7;

// 指定されたJSON・Xmlのファイルから取得した
// データを保持する変数
var org_data;
// タブ情報を保持する変数
var tab;
// 年情報を保持する変数
var yeart = 0;
// 表示されている書類数をカウントする変数
var total;

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

han = new Array(" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
zen = new Array(
  "　",
  "１",
  "２",
  "３",
  "４",
  "５",
  "６",
  "７",
  "８",
  "９",
  "０"
);

function zen2han(text) {
  if (z2h) {
    for (var ii = 0; ii < zen.length; ii++) {
      var regex = new RegExp(zen[ii], "g");
      text = text.replace(regex, han[ii]);
    }
  }
  return text;
}

//------------------------------
// JSON/Xmlから取得したデータを表示するメインAPI
//------------------------------
function drawDataArea(data, year, tabm, root) {
  // 変数tabに選択中のタブ情報を記録
  tab = tabm;

  // データ表示箇所のルートElementを取得する
  var elmDiv = document.getElementById(root);
  if (true == elmDiv.hasChildNodes()) {
    //for (var i in elmDiv.childNodes) {
    for (i = 0; i < elmDiv.childNodes.length; i++) {
      if (
        null != elmDiv.childNodes[i].nodeName &&
        undefined != elmDiv.childNodes[i].nodeName
      ) {
        if (
          elmDiv.childNodes[i].nodeName.toUpperCase() == "div".toUpperCase()
        ) {
          elmDiv.removeChild(elmDiv.childNodes[i]);
          break;
        }
      }
    }
  }

  elmDiv.style = "background-color:transparent;";
  total = 0;

  // 各表示項目をループして表示/非表示を切り替える
  //	for (var i in data.item) {
  for (i = 0; i < data.item_count; i++) {
    if (total >= NewNum && irTop) {
      break;
    }
    if (data.item[i].date.substr(0, 4) == year) {
      // DropDownListで選択された年度に該当する
      // データを表示する処理
      createData(elmDiv, data.item[i], tab);
      //			total += 1;
    } else if (0 == year) {
      // 「最新１年分」に該当するデータかどうか判定する
      if (irTop == false && yearList != 2) {
        if (IsOneYearAgo(new Date(), data.item[i].date)) {
          // 「最新１年分」に該当するデータを表示する処理
          createData(elmDiv, data.item[i], tab);
          //				total += 1;
        }
      } else {
        createData(elmDiv, data.item[i], tab);
      }
    }
  }

  // データが１件も存在しない場合
  if (total == 0) {
    var elmDl = document.createElement("div");
    elmDl.className = "newsSpace newsBox";
    elmDiv.appendChild(elmDl);
    elmDl.appendChild(document.createTextNode("掲載情報はございません"));
  }
}

//------------------------------
// JSON/Xmlから取得したデータの各項目を表示させる関数
// 表示データ作成(１データ毎)
// 【パラメータ】
// element：
// item：JSON/Xmlデータの各項目(item)
//------------------------------
function createData(elmDiv, item, tab) {
  switch (tab) {
    case "release":
      if (
        item.news_type != "press" &&
        item.news_type != "yuho" &&
        item.news_type != "tanshin"
      ) {
        return;
      }
      break;

    case "pr":
      if (item.news_type != "pr") {
        return;
      }
      break;

    // IR資料タブ
    case "ir_material":
      if (item.news_type == "ir_material") {
      } else if (item.news_type == "ir_material_for_fiscal_ym") {
      } else {
        return;
      }
      break;

    // お知らせ	タブ
    case "announcement":
      if (item.news_type == "announcement") {
      } else {
        return;
      }
      break;
  }

  if (elmDiv.id == "divDataAreaNews") {
    var targetList = [
      "tanshin",
      "press",
      "yuho",
      "ir_material_for_fiscal_ym",
      "ir_material",
    ];
  } else {
    var targetList = ["pr"];
  }
  if (targetList.indexOf(item.news_type) < 0) {
    return;
  }

  var element = document.createElement("div");
  element.className = "newsBox shadow deepBlue";
  element.style = "background-color:transparent;";
  elmDiv.appendChild(element);

  // <dt>要素を新規に作成する
  var elmDt = document.createElement("h4");
  elmDt.className = "newsTitle borderDeepBlueIr deepBlue";
  // 作成した<dt>要素に各表示項目の「format_date」の値を追加する
  elmTime = document.createElement("span");
  elmTime.appendChild(document.createTextNode(item.format_date));
  elmTime.className = "newsTime right DeepBlue";

  if (item.news_type == "yuho") {
    elmDt.appendChild(document.createTextNode("有価証券報告書"));
  } else if (item.news_type == "press") {
    elmDt.appendChild(document.createTextNode("適時開示"));
  } else if (item.news_type == "tanshin") {
    elmDt.appendChild(document.createTextNode("決算短信"));
  } else if (item.news_type == "pr") {
    elmDt.appendChild(document.createTextNode("プレスリリース"));
  } else if (item.news_type == "announcement") {
    elmDt.appendChild(document.createTextNode("お知らせ"));
  } else if (item.news_type == "ir_material_for_fiscal_ym") {
    elmDt.appendChild(document.createTextNode("IR資料"));
  } else {
    elmDt.appendChild(document.createTextNode("インフォメーション"));
  }
  // var elmPara = document.createElement('p');
  // カテゴリの<img>要素を新規に作成する
  // var elmImg = document.createElement('img');
  // 作成した<img>要素のsrc属性の設定を行う
  // elmImg.setAttribute('src', GetCategoryIconUrl(item));

  // 作成した<img>要素のalign属性の設定を行う
  // elmImg.setAttribute('align', 'absmiddle');
  // 作成した<dt>要素に<img>要素を追加する
  // elmPara.appendChild(elmImg);
  // パラメータで渡されてきた<dl>要素に<dt>要素を追加する
  // element.appendChild(elmDt);
  var elmLine = document.createElement("div");
  elmLine.className = "newsHeader";
  elmLine.appendChild(elmDt);
  elmLine.appendChild(elmTime);
  // <dd>要素を新規に作成する
  var elmDd = document.createElement("article");
  elmDd.className = "newsContent";
  elmDd.appendChild(elmLine);
  // elmDd.appendChild(elmPara);

  var newsUl = document.createElement("p");
  newsUl.className = "fontSize18 black normal";
  // var newsLi1 = document.createElement('li');
  // 	newsLi1.className = 'normal';
  // var newsLi2 = document.createElement('li');
  // 	newsLi2.className = 'normal';
  // var newsLi3 = document.createElement('li');
  // 	newsLi3.className = 'normal';

  // newsUl.appendChild(newsLi1);
  // newsUl.appendChild(newsLi2);
  // newsUl.appendChild(newsLi3);

  elmDd.appendChild(newsUl);
  element.appendChild(elmDd);
  // 各表示項目の「link」の値が設定されている場合は
  // <dd>要素に<a>要素を追加する
  // 「link」が設定されていない場合は
  // <dd>要素に各表示項目の「title」の値のみを追加する
  if (item.link.length > 0) {
    var elmA = document.createElement("a");
    elmA.href = item.link;
    // 作成した<a>要素のtarget属性に
    // 各表示項目の「new_target」の値を設定する
    elmA.target = item.new_target;
  } else {
    var elmA = document.createElement("div");
  }
  elmA.className = "shadow deepBlue bgWhite newsBoxIr newsCase";

  // 作成した<a>要素のtarget属性に
  // 各表示項目の「title」の値を追加する
  // elmA.appendChild(document.createTextNode(item.title));
  // <dd>要素に<a>要素を追加する
  // elmDd.appendChild(elmA);
  // elmA.appendChild(document.createTextNode( '詳細を見る' ));
  newsUl.appendChild(document.createTextNode(zen2han(item.title)));

  elmA.appendChild(elmDd);
  element.appendChild(elmA);

  // コメント
  if (item.comment.length > 0) {
    var text = item.comment;
    var comment = document.createElement("p");
    comment.className = "fontSize18 black normal";
    comment.innerHTML += text;
    elmDd.appendChild(comment);
  }

  // ファイルタイプの<img>要素を新規に作成する
  // var elmImg2 = document.createElement('img');
  // elmImg2.style.width ='auto';
  // elmImg2.style.height ='auto';
  //	// 作成した<img>要素のsrc属性を設定する
  // elmImg2.setAttribute('src', "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/filetype_icon/" + item.type + ".gif");
  // if(item.type == "url"){
  // 	elmImg2.setAttribute("src", "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/filetype_icon/space.gif");
  // }else{
  // 	elmImg2.setAttribute("src", "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/filetype_icon/" + item.type + ".gif");
  // }

  //	// 作成した<img>要素のalign属性を設定する
  // elmImg2.setAttribute('align', 'absmiddle');
  //	// <dd>要素に<img>要素を追加する
  // elmA.appendChild(elmImg2);

  // <dd>要素にファイルサイズのテキスト要素を追加する
  // if (item.file_size.length > 0) {
  // 	elmA.appendChild(document.createTextNode('（' + item.file_size + 'KB）'));
  // }

  // 新着項目の場合は新着アイコンを追加する
  // var fDate = GetFormatDate(item.date);
  // if (NewIconFlg && fDate >= GetComputeDate(NewIconLimit)) {
  // 新着アイコン用の<img>要素を新規に作成する
  // var elmImg3 = document.createElement('img');
  // elmImg3.style.width ='auto';
  // elmImg3.style.height ='auto';
  // 作成した<img>要素のsrc属性を設定する
  // elmImg3.setAttribute("src", "//ssl4.eir-parts.net/Custom/public/parts/3823/ja/parts/img/new_icon.gif");
  // 作成した<img>要素のalign属性を設定する
  // elmImg3.setAttribute('align', 'absmiddle');
  // <dd>要素に<img>要素を追加する
  // elmDt.appendChild(elmImg3);

  //		var elmSpn = document.createElement('span');
  //		elmSpn.style.color ='#ff0000';
  //		elmSpn.appendChild(document.createTextNode(' New!'));
  //		elmDd.appendChild(elmSpn);
  // }

  // コメントあり
  // if (item.comment.length > 0) {
  // 	var elmDiv = document.createElement('div');
  // 	var text = item.comment;
  // 	elmDiv.innerHTML = text;
  // 	elmDd.appendChild(elmDiv);
  // }

  total += 1;
}

//------------------------------
// 年度選択DropDownListの作成
//------------------------------
function createSelect(data) {
  // 年度選択DropDownListの表示領域となる
  // ルートElementを取得する
  // ルートElementが見つからない場合は、
  // 新規作成(<div id='divSelect'>要素)して追加する
  // var elmDiv = document.getElementById('divSelect');
  var elmDiv = document.getElementById("divSelect");
  elmDiv.className = "selectBox shadow deepBlue";

  // 年度選択DropDownList(<select id='yearSelect' name='yearSelect'>)を取得する
  var elmSel = document.getElementById("yearSelect");

  // 年度のリストを取得する
  var arr = GetYearList(data);

  // リストの中で最大の年度を取得する
  var max = GetMaxOrMinYear(arr, true);
  // リストの中で最小の年度を取得する
  var min = GetMaxOrMinYear(arr, false);

  // 年度選択DropDownList(<select id='yearSelect' name='yearSelect'>要素)を新規に作成する
  elmSel = document.createElement("select");
  // <select>要素のid属性の設定を行う
  elmSel.id = "yearSelect";
  elmSel.className = "irSelect";
  // <select>要素のname属性の設定を行う
  elmSel.name = "yearSelect";
  // elmSel.size = 1;
  // DropDownList内の項目が切り替えられた時の
  // イベントハンドラを追加する
  addEventListener(elmSel, "change", function () {
    selIndex();
  });

  // 「最新１年分」の選択項目Element(<option>要素)を新規に作成する
  var elmOpt = document.createElement("option");
  // Valueの設定
  elmOpt.value = "0";
  // Textの設定
  elmOpt.appendChild(document.createTextNode("最新1年分"));
  // DropDownList(<select>要素)に追加する
  elmSel.appendChild(elmOpt);

  // 各年度の選択項目Element(<option>要素)を新規に作成・追加する
  for (var i = max; i >= min; i--) {
    elmOpt = document.createElement("option");
    // Valueの設定
    elmOpt.value = i;
    // Textの設定
    elmOpt.appendChild(document.createTextNode("　" + i + "年　"));
    // DropDownList(<select>要素)に追加する
    elmSel.appendChild(elmOpt);
  }

  // 年度選択DropDownListの表示領域にElementを追加する
  elmDiv.appendChild(elmSel);
}

//------------------------------
// 年度選択DropDownListの項目が
// 切り替えられた時のイベントハンドラ
//------------------------------
function selIndex(index) {
  var year = 0;
  // 年度選択DropDownList(<select>要素)をIDの値で検索し、
  // 取得する
  var elmSel = document.getElementById("yearSelect");
  if (elmSel != null && elmSel != undefined) {
    year = elmSel.options[elmSel.selectedIndex].value;
  }

  yeart = year;

  // 表示データの更新を行う

  drawDataArea(org_data, year, tab, "divDataAreaNews");
  drawDataArea(org_data, year, tab, "divDataAreaPress");
}

//------------------------------
// 年度アンカーリンク作成
//------------------------------
function drawMenuArea(data) {
  // データ表示箇所のルートElementを取得する
  var elmLiRoot = document.getElementById("press_link");

  if (null == elmLiRoot) {
    return;
  }

  // プレスリリースの年度リンク作成処理
  // 年度のリストを取得する
  var arr = GetYearList(data);

  // リストの中で最大の年度を取得する
  var max = GetMaxOrMinYear(arr, true);
  // リストの中で最小の年度を取得する
  var min = GetMaxOrMinYear(arr, false);

  // ul要素の作成
  var elmUl = document.createElement("ul");
  // class属性の設定
  elmUl.className = "sub";
  // <div>要素に追加する
  elmLiRoot.appendChild(elmUl);

  // 「最新１年分」の選択項目Element(<li>要素)を新規に作成する
  var elmLi = document.createElement("li");

  // 「最新１年分」の選択項目Element(<a>要素)を新規に作成する
  var elmA = document.createElement("a");
  // hrefの設定
  elmA.href = "javascript:void(0);";
  //elmA.href = 'javascript:YearLink_onclick(0);';
  // イベントハンドラを追加する
  addEventListener(elmA, "click", function () {
    return YearLink_onclick(0);
    return false;
  });
  // Textの設定
  elmA.appendChild(document.createTextNode("最新1年分"));

  // <li>要素に追加する
  elmLi.appendChild(elmA);
  // <ul>要素に追加する
  elmUl.appendChild(elmLi);

  // 各年度の選択項目Element(<option>要素)を新規に作成・追加する
  for (var i = max; i >= min; i--) {
    // 各年度の選択項目Element(<li>要素)を新規に作成する
    var elmLi = document.createElement("li");
    // 各年度のリンクを新規に作成する
    var elmAYear = CreateAnchorElm(i);
    // <li>要素に追加する
    elmLi.appendChild(elmAYear);
    // <ul>要素に追加する
    elmUl.appendChild(elmLi);
  }
}

//------------------------------
// 各年度のメニューリンクを作成する
//------------------------------
function CreateAnchorElm(year) {
  // 各年度のリンクを新規に作成する
  var elmAYear = document.createElement("a");
  // hrefの設定
  elmAYear.href = "javascript:void(0);";
  //elmAYear.href = 'javascript:YearLink_onclick(' + year + ');';
  // イベントハンドラを追加する
  addEventListener(elmAYear, "click", function () {
    return YearLink_onclick(year);
    return false;
  });
  // Textの設定
  elmAYear.appendChild(document.createTextNode(year.toString() + "年"));

  return elmAYear;
}

//-----------------------------------
// 年度リストをクリックしてデータ更新
//-----------------------------------
function YearLink_onclick(year) {
  // 表示データの更新を行う
  drawDataArea(org_data, year, tab, "divDataAreaNews");
  drawDataArea(org_data, year, tab, "divDataAreaPress");

  yeart = year;

  //	var elmdiv = document.getElementById('press_link');
  //	var elmA = elmdiv.getElementsByTagName('a');
  //	for(i=0;elmA.length > i;i++){
  //	elmA[i].style.fontWeight = 'normal';
  //	elmA[i].style.color ='#8D435B';
  //	}
  //
  //	var nowA = document.getElementById(year+'Li');
  //	var oneA = document.getElementById('oneyear');
  //	if(nowA == null){
  //	oneA.style.fontWeight = 'bold';
  //	oneA.style.color ='#B70F46';
  //	}
  //	else{
  //	nowA.style.fontWeight = 'bold';
  //	nowA.style.color ='#B70F46';
  //	}

  return false;
}

//------------------------------
// JSON・Xmlから取得したデータの
// 年度のリストを取得するためのサポート関数
//------------------------------
function GetYearList(data) {
  // 年度の配列格納用の変数を新規に宣言
  var arr = new Array();

  // JSON(またはXml)のデータをループして、
  // 各データの「date」で指定されている値を取得し、
  // 配列に格納する。
  for (i = 0; i < data.item_count; i++) {
    var year = data.item[i].date.substr(0, 4);
    if (!(year in arr)) {
      arr[year] = year;
    }
  }

  return arr;
}

//------------------------------
// 取得した年度のリストから
// 最大(または最小)の年度を取得するためのサポート関数
// 【パラメータ】
// IsMax：最大(または最小)の切り替えフラグ
//------------------------------
function GetMaxOrMinYear(arr, IsMax) {
  if (IsMax) {
    // 年度リストを降順に並びかえ
    arr.reverse();
  } else {
    // 年度リストを昇順に並びかえ
    arr.sort();
  }
  return arr[0];
}

//------------------------------
// 【クロスブラウザ対応】
// 年度選択DropDownListへのイベントの追加方法が違うため、
// それをカバーするサポート関数
// 【パラメータ】
// Target：イベントの追加対象になるElement
// type：イベント名から「on」を除いた名前
// func：イベントが発生した時に実行させる関数
// 各ブラウザによって、
//------------------------------
function addEventListener(target, type, func) {
  if (target.attachEvent) {
    // 【IE対応】イベント追加処理
    target.attachEvent("on" + type, func);
  } else if (target.addEventListener) {
    // 【FireFox対応】イベント追加処理
    target.addEventListener(type, func, true);
  } else {
    //イベントリスナが使えない場合は on○○ 属性を上書き
    target["on" + type] = func;
  }
}

//------------------------------
// 年度選択DropDownListで
// 「最新１年分」が指定されている場合に
// 各データが最新１年のデータかどうか判定するサポート関数
//------------------------------
function IsOneYearAgo(CurDate, CompDate) {
  var y = CompDate.substr(0, 4);
  var m = CompDate.substr(5, 2);
  var d = CompDate.substr(8, 2);

  var year = CurDate.getYear();
  if (year < 2000) year += 1900;
  var mon = CurDate.getMonth() + 1;
  var date = CurDate.getDate();

  NewDate = new Date(year - 1, mon, date);
  if (NewDate <= new Date(y, m, d)) {
    return true;
  }
  return false;
}

//-------------------------
// タブを選択してデータ更新
//-------------------------
function TabLink_onclick(tabm, n) {
  // var taba =document.getElementById('tab').getElementsByTagName('a');
  var taba = document.getElementById("irNewsButton").getElementsByTagName("a");
  for (var i in taba) {
    taba[i].className = "irNewsTab bgWhite shadow center deepBlue fontSize26";
  }
  taba[n].className = "irNewsTab bgDeepBlue center white fontSize26 selected";

  // 表示データの更新を行う
  drawDataArea(org_data, year, tab, "divDataAreaNews");
  drawDataArea(org_data, year, tab, "divDataAreaPress");

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
  while (cnt-- > 0) src = "0" + src;
  return src;
}

function IsTanshinData(item) {
  if (item != null) {
    switch (item.sub_type) {
      case "id10":
      case "id11":
      case "id20":
      case "id21":
      case "id30":
      case "id31":
      case "id40":
      case "id41":
      case "id160":
      case "id161":
      case "id170":
      case "id171":
      case "id180":
      case "id181":
      case "id190":
      case "id191":
        // 短信系データの場合は、trueを返す
        return true;
    }
  }
  return false;
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
  if (
    nType.indexOf("tanshin") > -1 ||
    nType.indexOf("pr") > -1 ||
    nType.indexOf("press") > -1
  ) {
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
// function GetCategoryIconUrl(item) {
// 	var cat = GetItemCategory(item);
// alert(item.sub_type);
// 	if (cat != null && cat != "") {
// 		switch (cat) {
// 			case "announcement":
// 				if (aFlg == true) {
// 					return "image_ir/" + item.news_type + ".png";
// 				} else {
// 					return "image_ir/" + item.sub_type + ".png";
// 				}
// 			case "ir_material":
// 				if (iFlg == true) {
// 					return "image_ir/" + item.news_type + ".png";
// 				} else {
// 					return "image_ir/" + item.sub_type + ".png";
// 				}
// 			case "press":
// 				if (pFlg == true) {
// 					return "image_ir/" + item.news_type + ".png";
// 				} else {
// 					return "image_ir/" + item.sub_type + ".png";
// 				}
// 			case "yuho":
// 				if (yFlg == true) {
// 					return "image_ir/" + item.news_type + ".png";
// 				} else {
// 					return "image_ir/" + item.sub_type + ".png";
// 				}
// 		}
// 	}

// 	return "";
// }

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
    org_data = "";
    var elmDiv = document.getElementById("divDataArea");
    var elmDl = document.createElement("dl");
    elmDiv.appendChild(elmDl);
    elmDl.appendChild(document.createTextNode("掲載情報はございません"));
    return;
  }

  // グローバル変数にデータを保持しておく
  org_data = data;

  var yearDiv = document.getElementById("yearList");
  switch (yearList) {
    case 0:
      yearDiv.id = "press_link";
      // メニューリンクを生成
      drawMenuArea(data);
      break;

    case 1:
      yearDiv.id = "divSelect";
      // プルダウンを生成
      createSelect(data);
      break;
  }

  // 取得データの表示処理
  drawDataArea(data, 0, "newt", "divDataAreaNews");
  drawDataArea(data, 0, "newt", "divDataAreaPress");
}

// document.write('<script type="text/javascript" src="js/announcement_7.js"></script>')
document.write(
  '<script type="text/javascript" src="//ssl4.eir-parts.net/V4Public/EIR/3823/ja/announcement/announcement_7.js" charset="UTF-8"></script>'
);
