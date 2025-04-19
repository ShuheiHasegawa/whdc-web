import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja" translate="no">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="THE WHY HOW DO COMPANY, WHDC" />
        <meta
          name="description"
          content="当社IR関連(「企業憲章」「株式情報」「財務ハイライト」「IR資料」「その他IR情報」)などの情報を掲載しています。"
        />
        <meta
          name="companyprofile"
          content="THE WHY HOW DO COMPANY株式会社(THE WHY HOW DO COMPANY, Inc.)、本社：東京都新宿区愛住町22 第3山田ビル、TEL：03-4405-5460、設立：2004年7月12日、代表者：代表取締役会長兼社長　田邊 勝己、証券取引所：東京証券取引所市場第二部、証券コード：3823、グループ事業：株式会社渋谷肉横丁、株式会社インタープラン、株式会社クリプト・フィナンシャル・システム、株式会社SOUND PORT、Pavilions株式会社"
        />
        <meta name="author" content="WHDC" />
        <meta name="google" content="notranslate" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
