import React from "react";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import SEO from "../../components/Seo";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="プライバシーポリシー"
        description="THE WHY HOW DO COMPANY株式会社の個人情報保護方針をご案内しています。当社の個人情報の取扱い方針、取得・利用・提供のルール、安全管理措置、第三者提供の制限、保有個人データの開示請求手続き、お問い合わせ窓口など、個人情報の適切な保護に関する取り組みを掲載しています。"
        keywords="プライバシーポリシー, 個人情報保護方針, 個人情報保護, THE WHY HOW DO COMPANY, ワイハウ, 個人情報取扱い, 開示請求, JIS Q 15001"
        ogUrl="/privacy_policy"
      />
      <DarkTheme>
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default PrivacyPolicyPage;
