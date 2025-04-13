import React from "react";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <DarkTheme>
      <Navbar />
      <Contact />
      <Footer />
    </DarkTheme>
  );
};

export default ContactPage;
