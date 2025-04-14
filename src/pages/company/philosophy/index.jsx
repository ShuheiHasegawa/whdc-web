import React from "react";
import CompanyPhilosophy from "../../../components/CompanyPhilosophy";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DarkTheme from "../../../layouts/Dark";
import SEO from "../../../components/Seo";

const CompanyPhilosophyPage = () => {
  return (
    <>
      <SEO
        title="企業憲章"
        description="THE WHY HOW DO COMPANY（ワイハウ）の企業憲章をご紹介します。企業理念「価値創造の力で、もう一度豊かになる」のもと、Why（目的）、How（方法）、Do（実行）、Company（共同体）という4つの価値観を軸に、ビジネスモデル革新と価値創造を追求しています。経営方針と論語に基づく7か条の行動規範も掲載。"
        keywords="企業憲章, 企業理念, ワイハウ, THE WHY HOW DO COMPANY, Why, How, Do, Company, 価値創造, ビジネスモデル革新, 経営方針, 行動規範, 論語"
        ogUrl="/company/philosophy"
      />
      <DarkTheme>
        <Navbar />
        <CompanyPhilosophy />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default CompanyPhilosophyPage;
