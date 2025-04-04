import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import { GoogleAnalytics } from "nextjs-google-analytics";

// i18nの初期化を読み込む
import "../i18n";

import "../styles/globals.css";
import "../styles/font.css";
import "../styles/spacing.css";
// import "../components/reactbits/ui/InfiniteMenu/InfiniteMenu.css";
// import "../components/reactbits/backgrounds/Ballpit/Ballpit.css";
// import "../components/reactbits/text-animations/TrueFocus/TrueFocus.css";
// import "../components/reactbits/text-animations/ScrollVelocity/ScrollVelocity.css";
// import "../components/reactbits/ui/InfiniteScroll/InfiniteScroll.css";
// import "../components/reactbits/ui/SpotlightCard/SpotlightCard.css";
// import "../components/reactbits/backgrounds/Hyperspeed/Hyperspeed.css";
// import "../components/reactbits/backgrounds/Particles/Particles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="keywords"
          content="ワイハウ,THE WHY HOW DO COMPANY, テクニカルピッチ, 渋谷肉横丁"
        />
        <meta
          name="description"
          content="ワイハウ(THE WHY HOW DO COMPANY株式会社)新宿区のホームページです。グループ事業(プラットフォーム事業、コンテンツサービス事業、サブリース事業、教育関連事業、その他)、会社概要、株主・投資家情報などを掲載しています。"
        />
        <meta
          name="companyprofile"
          content="THE WHY HOW DO COMPANY株式会社(THE WHY HOW DO COMPANY, Inc.)、本社：東京都新宿区愛住町22 第3山田ビル、TEL：03-4405-5460、設立：2004年7月12日、代表者：代表取締役会長兼社長　田邊 勝己、証券取引所：東京証券取引所市場第二部、証券コード：3823、グループ事業：株式会社渋谷肉横丁、株式会社インタープラン、株式会社クリプト・フィナンシャル・システム、GUAM ENTERTAINMENT SYSTEMS,LLC、株式会社SOUND PORT、Pavilions株式会社、WHDCロジテック株式会社、株式会社宇部整環リサイクルセンター"
        />
        <title>ワイハウ - THE WHY HOW DO COMPANY株式会社</title>

        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <GoogleAnalytics gaMeasurementId="G-DTMT5CDTNR" />
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        id="wow"
        src="/js/wow.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script strategy="lazyOnload" id="initWow" src="/js/initWow.js"></Script>
      <Script
        id="jquery"
        src="/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        id="ripples"
        src="/js/jquery.ripples-master/dist/jquery.ripples-min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Ripples plugin loaded successfully");
        }}
        onError={(e) => {
          console.error("Error loading ripples plugin:", e);
        }}
      />
    </>
  );
}

export default MyApp;
