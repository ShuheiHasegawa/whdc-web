import React from "react";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";

const ContactPage = () => {
  const navbarRef = React.useRef(null);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <Contact />
    </DarkTheme>
  );
};

export default ContactPage;