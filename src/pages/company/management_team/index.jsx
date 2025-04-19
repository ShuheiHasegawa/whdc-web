import React from "react";
import ManagementTeam from "../../../components/ManagementTeam";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/Seo";

const ManagementTeamPage = () => {
  return (
    <>
      <SEO
        title="Management Team"
        description="マネジメントチームのメンバーと役割について紹介します。企業価値の向上とステークホルダーの信頼構築に取り組んでいます。"
        keywords="管理, 管理チーム, 企業統治, 社外取締役, マネジメントチーム, WHDC"
        ogUrl="/company/management_team"
      />
      <DarkTheme>
        <Navbar />
        <ManagementTeam />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default ManagementTeamPage;
