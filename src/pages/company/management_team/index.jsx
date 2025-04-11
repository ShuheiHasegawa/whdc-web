import React from "react";
import ManagementTeam from "../../../components/ManagementTeam";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const ManagementTeamPage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <ManagementTeam />
      <Footer />
    </DarkTheme>
  );
};

export default ManagementTeamPage;
