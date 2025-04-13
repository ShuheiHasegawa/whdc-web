import React from "react";
import CompanyPhilosophy from "../../../components/CompanyPhilosophy";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DarkTheme from "../../../layouts/Dark";

const ManagementPhilosophyPage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <CompanyPhilosophy />
      <Footer />
    </DarkTheme>
  );
};

export default ManagementPhilosophyPage;
