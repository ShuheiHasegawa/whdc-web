import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "../styles/globals.css";
import "../components/reactbits/ui/InfiniteMenu/InfiniteMenu.css";
// import "../components/reactbits/backgrounds/Ballpit/Ballpit.css";
import "../components/reactbits/text-animations/TrueFocus/TrueFocus.css";
import "../components/reactbits/text-animations/ScrollVelocity/ScrollVelocity.css";
import "../components/reactbits/ui/InfiniteScroll/InfiniteScroll.css";
import "../components/reactbits/ui/SpotlightCard/SpotlightCard.css";
import "../components/reactbits/backgrounds/Hyperspeed/Hyperspeed.css";
import "../components/reactbits/backgrounds/Particles/Particles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>THE WHY HOW DO COMPANY株式会社</title>
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
