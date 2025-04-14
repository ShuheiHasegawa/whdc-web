import React from "react";
import AboutParallax from "../../components/AboutParallax";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import SEO from "../../components/Seo";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="ワイハウの１０の特徴"
        description="THE WHY HOW DO COMPANYが提供する企業再成プラットフォームの10の特徴をご紹介。企業と個人が繋がり合い学び合う場を通じて、資本で繋がる価値創造のエコシステムを構築します。グループ企業の経営者はワイハウの大株主となり、独自の経営理論を共有しながら共に成長します。"
        keywords="企業再成プラットフォーム, ワイハウの特徴, 資本で繋がる, 価値創造, 経営者組合, 経営理論, 企業グループ, THE WHY HOW DO COMPANY, WHDC"
        ogUrl="/about"
      />
      <DarkTheme>
        <Navbar />
        <AboutParallax />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default AboutPage;
