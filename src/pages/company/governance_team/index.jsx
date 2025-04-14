import React from "react";
import GovernanceTeam from "../../../components/GovernanceTeam";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/Seo";
const GovernanceTeamPage = () => {
  return (
    <>
      <SEO 
        title="Governance Team" 
        description="ガバナンスチームのメンバーと役割について紹介します。企業価値の向上とステークホルダーの信頼構築に取り組んでいます。"
        keywords="ガバナンス, コーポレートガバナンス, 企業統治, 社外取締役, ガバナンスチーム, WHDC"
        ogUrl="/company/governance_team"
      />
    <DarkTheme>
        <Navbar />
        <GovernanceTeam />
        <Footer />
      </DarkTheme>
    </>
  );
};

export default GovernanceTeamPage;
