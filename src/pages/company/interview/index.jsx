import React from "react";
import Interview from "../../../components/Interview";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/Seo";

const InterviewPage = () => {
  return (
    <>
      <SEO
        title="コンプライアンスについて - THE WHY HOW DO COMPANY株式会社"
        description="THE WHY HOW DO COMPANY株式会社のコンプライアンス体制について、顧問弁護士の田邊勝己弁護士が解説します。社外取締役に元検察官の弁護士を迎え、企業の監視役として元裁判官の弁護士を監査役に任命、さらに警察OBによるコンプライアンス委員会を組織するなど、法令遵守と企業統治の先進的な取り組みを紹介しています。"
        keywords="コンプライアンス, 企業統治, 法令遵守, インサイダー取引対策, 田邊勝己弁護士, THE WHY HOW DO COMPANY, ワイハウ, 企業倫理, コーポレートガバナンス"
        ogUrl="/company/interview"
      />
      <DarkTheme>
        <Navbar />
        <Interview />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default InterviewPage;
