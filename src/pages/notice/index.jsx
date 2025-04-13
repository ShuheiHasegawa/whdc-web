import React from "react";
import Notice from "../../components/Notice";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";

const NoticePage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <Notice />
      <Footer />
    </DarkTheme>
  );
};

export default NoticePage;
