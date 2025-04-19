import React from "react";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import Footer from "../../components/Footer";
import SEO from "../../components/Seo";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="お問い合わせ"
        description="THE WHY HOW DO COMPANY株式会社へのお問い合わせ窓口のご案内です。IR情報、法人のお客様・製品・サービスに関するお問い合わせフォーム、およびゲームアプリ・ソーシャルゲームに関する各プラットフォーム別のお問い合わせ方法をご案内しています。"
        keywords="お問い合わせ, THE WHY HOW DO COMPANY, ワイハウ, IR情報, 法人向け, GREE, Mobage, App Store, Google Play"
        ogUrl="/contact"
      />
      <DarkTheme>
        <Navbar />
        <Contact />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default ContactPage;
