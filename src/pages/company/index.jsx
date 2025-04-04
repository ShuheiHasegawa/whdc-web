import React, { useState, useRef, useEffect } from "react";
import CompanyPage from "../../components/Company";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/Small-footer";

const Company = () => {
  return (
    <DarkTheme>
      <Navbar />
      <CompanyPage />
      <SmallFooter />
    </DarkTheme>
  );
};

export default Company;
