import React from "react";
import Notice from "../../components/Notice";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import SEO from "../../components/Seo";

const NoticePage = () => {
  return (
    <>
      <SEO
        title="ご利用にあたって"
        description="THE WHY HOW DO COMPANY株式会社ウェブサイトの利用規定です。当サイトの免責事項、著作権・商標権に関する情報、リンクポリシー、JavaScriptおよびプラグインの使用についてご案内しています。当ウェブサイトのご利用には、これらの規定への同意が必要です。"
        keywords="利用規定, 免責事項, 著作権, 商標権, リンクポリシー, THE WHY HOW DO COMPANY, ワイハウ, サイトポリシー, 利用条件"
        ogUrl="/notice"
        ogImage="/img/ogp/notice.jpg"
      />
      <DarkTheme>
        <Navbar />
        <Notice />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default NoticePage;
