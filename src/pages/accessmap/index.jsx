import React from "react";
import AccessMap from "../../components/AccessMap";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";

const AccessMapPage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <AccessMap />
      <Footer />
    </DarkTheme>
  );
};

export default AccessMapPage;
