document.addEventListener("DOMContentLoaded", function () {
  // var domain = window.location.protocol + "//" + window.location.host;

  // #TODO: 開発用
  var domain = "http://localhost:3000";

  // リンク要素を取得して処理
  var siteLinks = document.querySelectorAll("[data-site-link]");
  siteLinks.forEach(function (link) {
    var path = link.getAttribute("data-site-link");
    link.href = domain + path;
  });
});
