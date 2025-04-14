import React from "react";
import CompanyPage from "../../components/Company";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/Seo";

const Company = () => {
  return (
    <>
      <SEO
        title="会社情報"
        description="THE WHY HOW DO COMPANY株式会社の会社概要と沿革をご紹介します。2004年設立、東京都新宿区に本社を置き、スマートフォン向けサービス、不動産賃貸、イベント企画など多角的に事業展開。グループ会社には渋谷肉横丁、インタープラン、SOUND PORTなどを擁し、価値創造による企業成長を追求しています。"
        keywords="THE WHY HOW DO COMPANY, ワイハウ, 会社概要, 企業情報, 沿革, 岩尾俊兵, 渋谷肉横丁, グループ会社, 事業内容"
        ogUrl="/company"
      />
      <DarkTheme>
        <Navbar />
        <CompanyPage />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default Company;
