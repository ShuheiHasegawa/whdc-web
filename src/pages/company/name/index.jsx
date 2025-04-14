import React, { useState, useRef, useEffect } from "react";
import CompanyNamePage from "../../../components/CompanyName";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/Seo";

const CompanyName = () => {
  return (
    <>
      <SEO
        title="社名の由来"
        description="THE WHY HOW DO COMPANY株式会社の社名の由来と経営理念について。弦間明取締役による解説では、WHY(理念)・HOW(戦略)・DO(実行)に基づく5大要素を核に、顧客・社員・社会価値の創造、働き方・稼ぎ方の仕組み作り、PDCAサイクルなどを通じた持続的成長と企業価値向上を目指しています。"
        keywords="社名の由来, THE WHY HOW DO COMPANY, ワイハウ, 弦間明, 経営理念, WHY, HOW, DO, 5大要素, 企業価値"
        ogUrl="/company/name"
      />
      <DarkTheme>
        <Navbar />
        <CompanyNamePage />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default CompanyName;
