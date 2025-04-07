import React from "react";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import Footer from "../../components/Footer";

const ContactPage = () => {
  const navbarRef = React.useRef(null);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <Contact />
      <Footer />
    </DarkTheme>
  );
};

export default ContactPage;