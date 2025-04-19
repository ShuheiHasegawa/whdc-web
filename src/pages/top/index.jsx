import React from "react";
import WhyHow from "../../components/WhyHow";
import Footer from "../../components/Footer";
import IntroVideo from "../../components/IntroVideo";
import Navbar from "../../components/Navbar";
import Topics from "../../components/Topics";
import GroupCompanies from "../../components/GroupCompanies";
import Services from "../../components/Services";
import DarkTheme from "../../layouts/Dark";

const TopPage = () => {
  return (
    <DarkTheme>
      <div id="top-section">
        <Navbar />
        <IntroVideo />
        <div className="main-content">
          <Topics />
          <Services />
          <WhyHow subBG />
          <GroupCompanies />
          <Footer />
        </div>
      </div>
    </DarkTheme>
  );
};

export default TopPage;
