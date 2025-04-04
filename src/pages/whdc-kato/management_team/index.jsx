import React, { useEffect, useRef } from "react";
import Head from "next/head";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import ProfileCard from "../../../components/ProfileCard";
import { useTranslation } from "react-i18next";

const ManagementTeam = () => {
  const { t, i18n } = useTranslation();
  // #TODO: 言語を切り替えるメソッド
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  const MainContent = React.useRef(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(".member-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (sections) {
        sections.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <DarkTheme>
      <Head>
        <title>
          ワイハウ - Top Management Team - THE WHY HOW DO COMPANY株式会社
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="video-header-wrapper">
        <style jsx global>{`
          .video-header-wrapper {
            position: relative;
            width: 100%;
            height: clamp(100px, 24vh, 240px);
            overflow: hidden;
          }

          @media screen and (max-width: 767px) {
            .video-header-wrapper {
              height: clamp(100px, 16vh, 180px) !important;
            }
          }
        `}</style>
        <div
          className="video-background"
          style={{ position: "relative", height: "100%" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          >
            <source src="/movies/management_movie_1.mp4" type="video/mp4" />
          </video>
          <div
            className="title-container"
            style={{
              position: "absolute",
              bottom: "30px",
              right: "30px",
              zIndex: 1,
            }}
          >
            <h1
              className="color-font"
              style={{
                padding: "8px 12px",
                fontSize: "clamp(1rem, 5vw, 1.4rem)",
                margin: 0,
                color: "#fff",
                boxShadow: "4px rgba(0, 0, 0, 0.3)",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                // fontFamily: "'Dancing Script', cursive",
                // fontFamily: "'Playfair Display', serif", // または 'Cormorant', serif または 'Libre Baskerville', serif
                // fontFamily: "'Cormorant', serif", // または 'Cormorant', serif または 'Libre Baskerville', serif
                fontFamily: "'Libre Baskerville', serif", // または 'Cormorant', serif または 'Libre Baskerville', serif
                letterSpacing: "0.02em",
              }}
            >
              Top Management Team
            </h1>
          </div>
        </div>
      </div>

      <div ref={MainContent} className="main-content">
        <div className="container">
          <div className="pt-24 pb-12">
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(1.25rem, 4vw, 2rem)",
                fontWeight: "normal",
                padding: "0 0 8px 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                textAlign: "left",
                margin: "0",
                width: "100%",
                fontFamily: "'Libre Baskerville', serif", // または 'Cormorant', serif または 'Libre Baskerville', serif
                letterSpacing: "0.02em",
              }}
            >
              Top Management Team
            </h2>
          </div>
        </div>

        <ProfileCard
          imageUrl="/img/whdc/team/iwao.jpg"
          name={t("management_team.iwao.name")}
          position={t("management_team.iwao.position")}
          career={[
            {
              year: "2013年8月",
              description: "株式会社理論経営設立・代表取締役社長",
            },
            { year: "2018年3月", description: "東京大学博士（経営学）取得" },
            { year: "2018年4月", description: "明治学院大学専任講師" },
            { year: "2021年4月", description: "慶應義塾大学商学部専任講師" },
            {
              year: "2022年3月",
              description: "株式会社ドリーム・アーツ取締役",
            },
            {
              year: "2022年4月",
              description: "慶應義塾大学商学部准教授（現任）",
            },
            { year: "2024年12月", description: "当社 代表取締役社長（現任）" },
          ]}
        />

        <ProfileCard
          imageUrl="/img/whdc/team/itou.jpg"
          name={t("management_team.itou.name")}
          position={t("management_team.itou.position")}
          career={[
            { year: "1996年4月", description: "ソフトウエア興行株式会社入社" },
            {
              year: "2008年3月",
              description: "グローバルコミュニケーションズ株式会社入社",
            },
            { year: "2008年10月", description: "当社 入社" },
            { year: "2020年3月", description: "当社 執行役員" },
            { year: "2020年11月", description: "当社 取締役" },
            {
              year: "2021年4月",
              description:
                "ソリュ―ション事業部管掌<br/>ソリュ―ション事業部長委嘱",
            },
            {
              year: "2023年8月",
              description: "One's Room株式会社取締役（現任）",
            },
            { year: "2023年9月", description: "当社 取締役副社長（現任）" },
            { year: "2023年11月", description: "当社 事業全般管掌（現任）" },
          ]}
        />

        <ProfileCard
          imageUrl="/img/whdc/team/hashimoto.jpg"
          name={t("management_team.hashimoto.name")}
          position={t("management_team.hashimoto.position")}
          career={[
            { year: "1986年4月", description: "株式会社資生堂パーラー入社" },
            { year: "2003年4月", description: "同社経営企画部長" },
            { year: "2004年12月", description: "同社取締役経営管理本部長" },
            { year: "2017年9月", description: "同社執行役員営業本部長" },
            { year: "2021年7月", description: "同社事業企画部参与" },
            { year: "2021年11月", description: "当社 監査役" },
            { year: "2022年1月", description: "株式会社資生堂パーラー参与" },
            {
              year: "2023年11月",
              description:
                "当社 取締役副社長 就任（現任）<br/>当社 経営企画部管掌 管理部管掌（現任）",
            },
          ]}
        />
      </div>
    </DarkTheme>
  );
};

export default ManagementTeam;
