window.BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.twhdc.co.jp";

// URLを動的に書き換える関数
function updateLinks() {
  const links = document.querySelectorAll('a[href^="https://www.twhdc.co.jp"]');
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      // twhdc.co.jpドメインの場合、相対パスに変換
      link.href = href.replace("https://www.twhdc.co.jp", "");
    }
  });
}

// DOMが読み込まれた後に実行
document.addEventListener("DOMContentLoaded", updateLinks);
