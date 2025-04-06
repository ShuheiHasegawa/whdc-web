import React, { useState, useRef, useEffect } from "react";
import CompanyNamePage from "../../../components/CompanyName";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import SmallFooter from "../../../components/Small-footer";

const CompanyName = () => {
  return (
    <DarkTheme>
      <Navbar />
      <CompanyNamePage />
      <SmallFooter />
    </DarkTheme>
  );
};

export default CompanyName;
