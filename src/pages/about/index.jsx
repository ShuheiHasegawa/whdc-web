import React from "react";
import AboutParallax from "../../components/AboutParallax";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";

const AboutPage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <AboutParallax />
      <Footer />
    </DarkTheme>
  );
};

export default AboutPage;
