import React from "react";
import CompanyPhilosophy from "../../../components/CompanyPhilosophy";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DarkTheme from "../../../layouts/Dark";

const CompanyPhilosophyPage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <CompanyPhilosophy />
      <Footer />
    </DarkTheme>
  );
};

export default CompanyPhilosophyPage;
