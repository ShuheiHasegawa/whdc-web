import React from "react";
import AccessMap from "../../components/AccessMap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import SEO from "../../components/Seo";

const AccessMapPage = () => {
  return (
    <>
      <SEO
        title="アクセスマップ"
        description="THE WHY HOW DO COMPANY株式会社へのアクセス情報です。東京都新宿区愛住町22 第3山田ビルに所在。都営新宿線 曙橋駅A1出口より徒歩約4分、東京メトロ丸ノ内線 四谷三丁目駅2番出口より徒歩約8分。お問い合わせは03-4405-5460まで。"
        keywords="ワイハウ, アクセスマップ, 曙橋駅, 四谷三丁目駅, THE WHY HOW DO COMPANY株式会社, 新宿区"
        ogUrl="/accessmap"
      />
      <DarkTheme>
        <Navbar />
        <AccessMap />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default AccessMapPage;
