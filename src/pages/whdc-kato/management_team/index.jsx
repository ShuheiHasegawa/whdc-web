import React, { useEffect, useRef } from "react";
import Head from "next/head";
import DarkTheme from "../../../layouts/Dark";
import Navbar from "../../../components/Navbar";
import RectRippleEffect from "../../../components/rippleEffect/RectRippleEffect";
import ProfileCard from "../../../components/ProfileCard";

const ManagementTeam = () => {
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
        <title>Management Team - THE WHY HOW DO COMPANY</title>
      </Head>
      <Navbar nr={navbarRef} lr={logoRef} />
      {/* TODO: 要調整 */}
      <div
        className="video-wrapper"
        style={{
          top: "36px",
          position: "relative",
        }}
      >
        <div className="video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              width: "200%",
              height: "200px",
              top: "60%",
              left: "50%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
              maxWidth: "1150px",
              margin: "0 auto",
            }}
          >
            <source src="/movies/management_movie_1.mp4" type="video/mp4" />
          </video>
          <div
            className="cont mt-0 mb-0"
            style={{
              position: "absolute",
              bottom: "30px",
              right: "30px",
              zIndex: 1,
            }}
          >
            <h1
              className="color-font fw-700"
              style={{
                backgroundColor: "#002B66",
                borderRadius: "5px",
                fontFamily: "'Century', serif",
                padding: "10px 30px",
                fontSize: "2rem",
                margin: 0,
              }}
            >
              Management Team
            </h1>
          </div>
        </div>
      </div>

      <div ref={MainContent} className="main-content">
        <h2
          style={{
            color: "#fff",
            fontSize: "2rem",
            padding: "10px 30px",
            border: "2px solid #fff",
            textAlign: "center",
            margin: "0 auto 40px auto",
            width: "50%",
          }}
        >
          マネジメントチーム役員一覧
        </h2>

        <ProfileCard
          imageUrl="/img/whdc/team/iwao.jpg"
          name="岩尾 俊兵"
          position="CEO/COO"
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
          name="伊藤 剛志"
          position="CTO/CSO"
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
          name="橋本 直樹"
          position="CFO/CHRO"
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
