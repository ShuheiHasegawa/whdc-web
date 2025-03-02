import React, { useEffect, useRef } from "react";
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
// import Works1Slider from "../../components/Works1-slider";
import DarkTheme from "../../layouts/Dark";
import ParticlesBackground from "../../components/ParticlesBackground";
import RippleEffect from "../../components/rippleEffect";
import OpeningText from "../../components/OpeningText";
import Link from "next/link";
import RbLetterGlitch from "../../components/RbLetterGlitch/index.tsx";
import InfiniteMenu from "../../components/reactbits/ui/InfiniteMenu/InfiniteMenu";
import InfiniteScroll from "../../components/reactbits/ui/InfiniteScroll/InfiniteScroll";
import SpotlightCard from "../../components/reactbits/ui/SpotlightCard/SpotlightCard";
// import Ballpit from "../../components/reactbits/backgrounds/Ballpit/Ballpit";
import TrueFocus from "../../components/reactbits/text-animations/TrueFocus/TrueFocus";
// import ScrollVelocity from "../../components/reactbits/text-animations/ScrollVelocity/ScrollVelocity";
import Hyperspeed from "../../components/reactbits/backgrounds/Hyperspeed/Hyperspeed";
import Particles from "../../components/reactbits/backgrounds/Particles/Particles";

const WhdcV2 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const infiniteScrollItems = [
    { content: "Text Item 1" },
    { content: <p>Paragraph Item 2</p> },
    { content: "Text Item 3" },
    { content: <p>Paragraph Item 4</p> },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];

  React.useEffect(() => {
    let interval = setInterval(() => {
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

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DarkTheme>
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Navbar nr={navbarRef} lr={logoRef} />
        <div
          style={{
            height: "100vh",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src="/movies/earth.mp4" type="video/mp4" />
          </video>
          <ParticlesBackground
            containerId="main-particles"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
            options={{
              fullScreen: {
                enable: false,
              },
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    area: 800,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                links: {
                  enable: true,
                  color: "#ffffff",
                  distance: 150,
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 2,
                },
              },
              interactivity: {
                events: {
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                },
              },
            }}
          />
          <OpeningText text="THE WHY HOW DO COMPANY" />
        </div>
      </div>
      <div ref={MainContent} className="main-content">
        <div className="section-padding p-0">
          <div className="full-width-container height-50vh">
                <InfiniteMenu
                  items={[
                    {
                      image: "https://picsum.photos/900/900?grayscale",
                      link: "https://google.com/",
                      title: "WHDC1",
                      description: "WHDC1",
                    },
                    {
                      image: "https://picsum.photos/900/900?grayscale",
                      link: "https://google.com/",
                      title: "WHDC2",
                      description: "WHDC2",
                    },
                    {
                      image: "https://picsum.photos/900/900?grayscale",
                      link: "https://google.com/",
                      title: "WHDC3",
                      description: "WHDC3",
                    },
                    {
                      image: "https://picsum.photos/900/900?grayscale",
                      link: "https://google.com/",
                      title: "WHDC4",
                      description: "WHDC4",
                    },
                    {
                      image: "https://picsum.photos/900/900?grayscale",
                      link: "https://google.com/",
                      title: "WHDC5",
                      description: "WHDC5",
                    },
                  ]}
                  width="100%"
                  height="600px"
                  minHeight="400px"
                />
          </div>
        </div>

        <div className="section-padding p-0">
          <div className="full-width-container height-50vh">
            <Hyperspeed 
              speed={2}
              density={1.5}
              starColor="#00ffff"
              backgroundColor="#000033"
              style={{ 
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0 
              }}
            />
          </div>
        </div>

        <div className="section-padding p-0">
          <div className="full-width-container height-50vh">
            <Particles />
          </div>
        </div>

        <div className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <TrueFocus />
              </div>
            </div>
          </div>
        </div>

        <div className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                {/* <ScrollVelocity 
                  texts={['React Bits', 'Scroll Down', 'Scroll Up', 'Scroll Left', 'Scroll Right', 'Scroll Up Left', 'Scroll Up Right', 'Scroll Down Left', 'Scroll Down Right']} 
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="section-padding p-0">
          <div className="full-width-container height-50vh">
                  <InfiniteScroll
                    items={infiniteScrollItems}
                    isTilted={true}
                    tiltDirection="left"
                    autoplay={true}
                    autoplaySpeed={0.1}
                    autoplayDirection="down"
                    pauseOnHover={true}
                  />
          </div>
        </div>

        <div className="section-padding p-0">
          <div className="full-width-container height-50vh">
                <RbLetterGlitch
                  text="THE WHY HOW DO COMPANY"
                  glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
                  glitchSpeed={50}
                  centerVignette={false}
                  outerVignette={true}
                  smooth={true}
                  height="500px" // 任意の高さを指定
                />
          </div>
        </div>

        {/* 新ビジネスモデル概要セクション */}
        <div className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center custom-font mb-30">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    新着情報
                  </h6>
                  <h3
                    className="medium-heading wow words chars splitting"
                    data-splitting
                  >
                    当社の新・ビジネスモデル概要
                  </h3>
                </div>
                <div className="text-center">
                  <p className="mb-30">
                    当社の新・ビジネスモデル概要についてはこちらのリンクからご覧ください。
                  </p>
                  <Link href="/business-model" className="btn-curve btn-lit">
                    <span>詳細を見る</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Webサイトリニューアルのお知らせ */}
        <div className="section-padding pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center custom-font mb-30">
                  <h3
                    className="medium-heading wow words chars splitting"
                    data-splitting
                  >
                    Webサイトリニューアルのお知らせ
                  </h3>
                </div>
                <div className="text-center">
                  <p className="mb-30">
                    当社が今後「企業再"成"プラットフォーム」という新たな全社的ビジネスモデルの下で企業活動をおこなうにあたって、当社Webサイトを新ビジネスモデルと経営体制が直感的に伝わる形に全面的にリニューアルする予定です。新サイト公開時期は未定ですが、12月中にデザインを固め、1月からサイト構築を開始する予定です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AboutUs1 />

        {/* グループ事業セクション */}
        <div className="section-padding pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center custom-font mb-30">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Group
                  </h6>
                  <h3
                    className="medium-heading wow words chars splitting"
                    data-splitting
                  >
                    グループ事業
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  className="item-box bg-img wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h5 className="custom-font">WHDCアクロディア</h5>
                    <img
                      src="/img/wdhc/group/acrodea_banner.png"
                      alt="WHDCアクロディア"
                      className="pt-2 pb-2"
                    />
                    <p>IoT、GAME、その他</p>
                    <div className="text-right">
                    <Link
                      href="/group/acrodea"
                      className="btn-curve btn-bord btn-lit mt-40"
                    >
                        <button className="view-details-button">詳細を見る</button>
                      </Link>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  className="item-box bg-img wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h5 className="custom-font">インタープラン</h5>
                    <img
                      src="/img/wdhc/group/school_banner.png"
                      alt="インタープラン"
                      className="pt-2 pb-2"
                    />
                    <p>求職者支援訓練、企業研修、セミナー事業</p>
                    <div className="text-right">
                    <Link
                      href="/group/interplan"
                      className="btn-curve btn-bord btn-lit mt-40"
                    >
                      <button className="view-details-button">詳細を見る</button>
                    </Link>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  className="item-box bg-img wow fadeInLeft"
                  data-wow-delay=".7s"
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h5 className="custom-font" style={{ fontSize: "22px" }}>
                      宇部整環リサイクルセンター
                    </h5>
                    <img
                      src="/img/wdhc/group/usr_banner.png"
                      alt="宇部整環リサイクルセンター"
                      className="pt-2 pb-2"
                    />
                    <p>最先端の産業廃棄物処理</p>
                    <div className="text-right">
                    <Link
                      href="/group/ube"
                      className="btn-curve btn-bord btn-lit mt-40"
                    >
                      <button className="view-details-button">詳細を見る</button>
                    </Link>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  className="item-box bg-img wow fadeInLeft"
                  data-wow-delay=".9s"
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h5 className="custom-font">WHDCエンタテインメント</h5>
                    <img
                      src="/img/wdhc/group/bingo_banner.png"
                      alt="WHDCエンタテインメント"
                      className="pt-2 pb-2"
                    />
                    <p>ビンゴ向けシステムの提供</p>
                    <div className="text-right">
                    <Link
                      href="/group/entertainment"
                      className="btn-curve btn-bord btn-lit mt-40"
                    >
                      <button className="view-details-button">詳細を見る</button>
                    </Link>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div
                  className="item-box bg-img wow fadeInLeft"
                  data-wow-delay="1.1s"
                >
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <h5 className="custom-font">渋谷肉横丁</h5>
                    <img
                      src="/img/wdhc/group/nikuyoko_banner.png"
                      alt="渋谷肉横丁"
                      className="pt-2 pb-2"
                    />
                    <p>商標権管理、不動産サブリース、飲食事業</p>
                    <div className="text-right">
                    <Link
                      href="/group/shibuya"
                      className="btn-curve btn-bord btn-lit mt-40"
                    >
                      <button className="view-details-button">詳細を見る</button>
                    </Link>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "50px 0",
            width: "100%",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <RippleEffect
            imageUrl="/img/profile/iwao.jpg"
            dropRadius={20}
            perturbance={0.04}
            style={{
              width: "clamp(200px, 30vw, 300px)",
              height: "clamp(200px, 30vw, 300px)",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "10px",
            }}
          />
          <RippleEffect
            imageUrl="/img/profile/tanabe.jpg"
            dropRadius={30}
            perturbance={0.02}
            style={{
              width: "clamp(200px, 30vw, 300px)",
              height: "clamp(200px, 30vw, 300px)",
              borderRadius: "50%",
              overflow: "hidden",
              margin: "10px",
            }}
          />
        </div>

        <Services1 />
        <Numbers1 />
        {/* <Works1Slider /> */}
        <VideoWithTestimonials />
        <SkillsCircle theme="dark" subBG />
        <Clients1 theme="dark" />
        <BlogsTwoColumnSlider />

        {/* 会社情報セクション */}
        <div className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head text-center custom-font mb-30">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Company
                  </h6>
                  <h3
                    className="medium-heading wow words chars splitting"
                    data-splitting
                  >
                    会社情報
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <h5 className="custom-font" style={{ fontSize: "22px" }}>
                    会社概要
                  </h5>
                  <p>THE WHY HOW DO COMPANYの概要、沿革などについてご紹介</p>
                  <div className="text-right">
                  <Link
                    href="/company/about"
                    className="btn-curve btn-bord btn-lit mt-40"
                  >
                    <button className="view-details-button">詳細を見る</button>
                  </Link>
                  </div>
                </SpotlightCard>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <h5 className="custom-font" style={{ fontSize: "22px" }}>
                    役員/コンプライアンス委員
                  </h5>
                  <p>コンプライアンスについて(顧問弁護士 田邊勝己弁護士)</p>
                  <div className="text-right">
                  <Link
                    href="/company/compliance"
                    className="btn-curve btn-bord btn-lit mt-40"
                  >
                      <button className="view-details-button">詳細を見る</button>
                    </Link>
                  </div>
                </SpotlightCard>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <SpotlightCard
                  className="custom-spotlight-card"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <h5 className="custom-font" style={{ fontSize: "22px" }}>
                    株主・投資家情報
                  </h5>
                  <p>経営方針、IR情報、株式情報などについてご紹介</p>
                  <div className="text-right">
                  <Link href="/ir" className="btn-curve btn-bord btn-lit mt-40">
                      <button className="view-details-button">詳細を見る</button>
                    </Link>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>

        <CallToAction subBG />

        <Footer />

        {/* スタイルを追加 */}
        <style jsx global>{`
          .medium-heading {
            font-size: 28px !important;
            line-height: 1.4 !important;
            margin-bottom: 20px !important;
          }

          @media (max-width: 768px) {
            .medium-heading {
              font-size: 24px !important;
            }
          }
        `}</style>
      </div>
    </DarkTheme>
  );
};

export default WhdcV2;
