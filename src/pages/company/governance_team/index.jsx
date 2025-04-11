import React from "react";
import GovernanceTeam from "../../../components/GovernanceTeam";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const GovernanceTeamPage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <GovernanceTeam />
      <Footer />
    </DarkTheme>
  );
};

export default GovernanceTeamPage;
