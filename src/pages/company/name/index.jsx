import React, { useState, useRef, useEffect } from "react";
import CompanyNamePage from "../../../components/CompanyName";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const CompanyName = () => {
  return (
    <DarkTheme>
      <Navbar />
      <CompanyNamePage />
      <Footer />
    </DarkTheme>
  );
};

export default CompanyName;
