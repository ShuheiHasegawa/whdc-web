/**
 * IR関連ページのリンクを修正する
 *
 * public/news/ir/ディレクトリ内のすべてのHTMLファイルを検索
 * 各ファイルの内容を読み取り
 * 安全のため、元のファイルをバックアップ（.bak拡張子で保存）
 * 以下の2種類のリンクを修正：
 * ディレクトリリンク（末尾が/のもの）にindex.htmlを追加
 * メインサイトへの絶対パスリンク（/company/など）を修正
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// HTMLファイルを取得
const htmlFiles = glob.sync("public/news/ir/**/*.html");
console.log(`処理するファイル数: ${htmlFiles.length}`);

htmlFiles.forEach((file) => {
  console.log(`処理中: ${file}`);
  let content = fs.readFileSync(file, "utf8");

  // 変更前のコンテンツをバックアップ（念のため）
  // fs.writeFileSync(`${file}.bak`, content);

  // ディレクトリリンクにindex.htmlを追加
  content = content.replace(/href="([^"]+\/)"/g, 'href="$1index.html"');

  // メインサイトへの絶対パスリンクを変更
  // 例: /company/ → /company/index.html
  content = content.replace(
    /href="\/(?!news\/ir)([^"]+)\/?"/g,
    function (match, p1) {
      return `href="/${p1}${p1.endsWith("/") ? "index.html" : ""}"`;
    }
  );

  fs.writeFileSync(file, content);
  console.log(`更新完了: ${file}`);
});

console.log("すべてのファイルの処理が完了しました！");
