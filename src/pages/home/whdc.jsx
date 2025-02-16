import React, { useEffect, useRef } from 'react';
import AboutUs1 from "../../components/About-us1";
import BlogsTwoColumnSlider from "../../components/Blogs-two-column-slider";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
// import IntroWithSlider1 from "../../components/Intro-with-slider1";
import Navbar from "../../components/Navbar";
import Numbers1 from "../../components/Numbers";
import Services1 from "../../components/Services1";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import Works1Slider from "../../components/Works1-slider";
import DarkTheme from "../../layouts/Dark";
import ParticlesBackground from "../../components/ParticlesBackground";
import RippleEffect from "../../components/rippleEffect";
import OpeningText from "../../components/OpeningText";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
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

  }, []); // 空の依存配列を確認

  return (
    <DarkTheme>
      <div style={{
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',  // 横スクロールを防ぐ
        position: 'relative'
      }}>
        <Navbar nr={navbarRef} lr={logoRef} />
        <div style={{ 
          height: '100vh', 
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
          >
            <source src="/movies/earth.mp4" type="video/mp4" />
          </video>
          <ParticlesBackground 
            containerId="main-particles"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1
            }}
            options={{
              fullScreen: {
                enable: false
              },
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    area: 800
                  }
                },
                color: {
                  value: "#ffffff"
                },
                links: {
                  enable: true,
                  color: "#ffffff",
                  distance: 150,
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 2
                }
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "grab"
                  },
                  onClick: {
                    enable: true,
                    mode: "push"
                  }
                }
              }
            }}
          />
          <OpeningText />
        </div>
      </div>
      <div ref={MainContent} className="main-content">
        <AboutUs1 />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px 0',
          width: '100%',
          gap: '50px',
          flexWrap: 'wrap',  // 画面幅が狭いときに折り返す
        }}>
          {/* 円形の波紋エフェクト */}
          <RippleEffect 
            imageUrl="/img/profile/iwao.jpg"
            dropRadius={20}
            perturbance={0.04}
            style={{
              width: 'clamp(200px, 30vw, 300px)',  // レスポンシブなサイズ
              height: 'clamp(200px, 30vw, 300px)',  // 幅と同じ値で正円を維持
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '10px',  // 折り返し時の余白
            }}
          />

          {/* 四角形の波紋エフェクト */}
          <RippleEffect 
            imageUrl="/img/profile/tanabe.jpg"
            dropRadius={30}
            perturbance={0.02}
            style={{
              width: 'clamp(200px, 30vw, 300px)',
              height: 'clamp(200px, 30vw, 300px)',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '10px',
            }}
          />
        </div>

        <Services1 />
        <Numbers1 />
        <Works1Slider />
        <VideoWithTestimonials />
        <SkillsCircle theme="dark" subBG />
        <Clients1 theme="dark" />
        <BlogsTwoColumnSlider />
        <CallToAction subBG />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;
