import React from "react";
import MessagePage from "../../../components/Message";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/Seo";

const Message = () => {
  return (
    <>
      <SEO
        title="社長メッセージ"
        description="THE WHY HOW DO COMPANY株式会社 代表取締役社長 岩尾 俊兵からのメッセージです。「価値創造の力で、もう一度豊かになる」というビジョンのもと、企業再成プラットフォームを全社的ビジネスモデルとして掲げ、M&A業界における総合ディベロッパーのような唯一無二の存在を目指しています。"
        keywords="社長メッセージ, 岩尾 俊兵, 企業再成プラットフォーム, THE WHY HOW DO COMPANY, ワイハウ, 価値創造, ビジネスモデル"
        ogUrl="/company/message"
      />
      <DarkTheme>
        <Navbar />
        <MessagePage />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default Message;
