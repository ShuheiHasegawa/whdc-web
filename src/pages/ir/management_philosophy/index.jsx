import React from "react";
import ManagementPhilosophy from "../../../components/ManagementPhilosophy";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DarkTheme from "../../../layouts/Dark";

const ManagementPhilosophyPage = () => {
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
      <ManagementPhilosophy />
      <Footer />
    </DarkTheme>
  );
};

export default ManagementPhilosophyPage;
