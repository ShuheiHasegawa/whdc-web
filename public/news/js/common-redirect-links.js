document.addEventListener("DOMContentLoaded", function () {
  // var domain = window.location.protocol + "//" + window.location.host;

  // #TODO: 開発用
  // var domain = "http://localhost:3000";

  // 本番環境
  var domain = "https://www.twhdc.co.jp";

  // テスト環境
  // var domain = "http://test-www.twhdc.co.jp";

  // リンク要素を取得して処理
  var siteLinks = document.querySelectorAll("[data-site-link]");
  siteLinks.forEach(function (link) {
    var path = link.getAttribute("data-site-link");
    link.href = domain + path;
  });
});
