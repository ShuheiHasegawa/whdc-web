import React from "react";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";

const PrivacyPolicyPage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </DarkTheme>
  );
};

export default PrivacyPolicyPage;
