import React from "react";
import CompanyPage from "../../components/Company";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Company = () => {
  return (
    <DarkTheme>
      <Navbar />
      <CompanyPage />
      <Footer />
    </DarkTheme>
  );
};

export default Company;
