import React from "react";
import AboutUs1 from "../../components/About-us1";
import BlogsTwoColumnSlider from "../../components/Blogs-two-column-slider";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroVideo from "../../components/IntroVideo";
import Navbar from "../../components/Navbar";
import Topics from "../../components/Topics";
import GroupCompanies from "../../components/GroupCompanies";
import Numbers1 from "../../components/Numbers";
import Services from "../../components/Services";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import Works1Slider from "../../components/Works1-slider";
import DarkTheme from "../../layouts/Dark";
import SiteMap from "../../components/SiteMap";

const TopPage = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    // setInterval(() => {
    //   if (fixedSlider.current) {
    //     var slidHeight = fixedSlider.current.offsetHeight;
    //   }
    //   if (MainContent.current) {
    //     // MainContent.current.style.marginTop = slidHeight + "px";
    //   }
    // }, 1000);
    var navbar = navbarRef.current;
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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroVideo sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Topics />
        <GroupCompanies />
        <AboutUs1 />
        <Services />
        <Numbers1 />
        <Works1Slider />
        {/* <VideoWithTestimonials /> */}
        {/* <SkillsCircle theme="dark" subBG /> */}
        {/* <Clients1 theme="dark" /> */}
        {/* <BlogsTwoColumnSlider /> */}
        <CallToAction subBG />
        <SiteMap />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default TopPage;
