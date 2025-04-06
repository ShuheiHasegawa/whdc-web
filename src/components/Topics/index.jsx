/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import styles from "./styles.module.css";
import HeroImage from "../HeroImage";
import Link from "next/link";
import Information from "../Information";
import SpotlightCard from "../reactbits/ui/SpotlightCard/SpotlightCard";

const Topics = () => {
  const newsItems = {
    pressRelease: {
      date: "2024.03.10",
      title: "Acrodea firstView03のお知らせ",
      url: "https://www.twhdc.co.jp/ir/news/index.html",
      category: "PRESS RELEASE",
    },
    disclosure: {
      date: "2024.03.09",
      title: "2024年3月期 第3四半期決算短信〔日本基準〕（連結）",
      url: "https://www.twhdc.co.jp/ir/news/index.html",
      category: "DISCLOSURE",
    },
  };

  return (
    <section className={`${styles.topics} section-padding`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className={styles.secHead}>
              <Split>
                <h6 className="wow fadeIn" data-wow-delay=".1s">
                  LATEST NEWS
                </h6>
              </Split>
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  TOPICS
                </h3>
              </Split>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 pt-2 pb-2">
            <Split>
              <SpotlightCard
                className={`${styles.newsItem} wow fadeInUp`}
                data-wow-delay="0.2s"
              >
                <Link href="/company">
                  <a>
                    <HeroImage
                      src="/img/firstview_about_768.png"
                      alt="会社概要"
                      mobileHeight="120px"
                      tabletHeight="140px"
                      desktopHeight="180px"
                    />
                    <div
                      className={styles.newsContent}
                      style={{ paddingTop: "16px" }}
                    >
                      <h2 className={styles.newsHeading}>会社概要</h2>
                      <span className={styles.newsTitle}>
                        当社の概要、沿革などについてご紹介
                      </span>
                    </div>
                  </a>
                </Link>
              </SpotlightCard>
            </Split>
          </div>
          <div className="col-lg-6 pt-2 pb-2">
            <Split>
              <SpotlightCard
                className={`${styles.newsItem} wow fadeInUp`}
                data-wow-delay="0.3s"
              >
                <Link
                  href="https://www.twhdc.co.jp/ir/"
                  passHref
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <HeroImage
                      src="/img/firstview_ir_768.png"
                      alt="株主・投資家情報"
                      mobileHeight="120px"
                      tabletHeight="140px"
                      desktopHeight="180px"
                    />
                    <div
                      className={styles.newsContent}
                      style={{ paddingTop: "16px" }}
                    >
                      <h2 className={styles.newsHeading}>決算・適時開示</h2>
                      <span className={styles.newsTitle}>
                        経営方針、IR情報、株式情報などについてご紹介
                      </span>
                    </div>
                  </a>
                </Link>
              </SpotlightCard>
            </Split>
          </div>
        </div>
        {/* <div className="row justify-content-center pt-4">
          <div className="col-lg-4">
            <a
              href="https://www.twhdc.co.jp/ir/news/index.html"
              className={`${styles.moreButton} wow fadeInUp`}
              data-wow-delay="0.4s"
              target="_blank"
              rel="noopener noreferrer"
            >
              ニュース一覧
            </a>
          </div>
        </div> */}
        {/* #TODO: 新着情報 */}
        {/* <div className="row justify-content-center pt-4"> */}
        {/* <div className="col-lg-4"> */}
        {/* <p className="topics topNews"> */}
        {/* <span className="fontSize26 white normal">新着情報</span> */}
        {/* </p> */}
        {/* <!-- ================================= E-IRによる情報の自動出力に必要な部分 ========================== --> */}
        {/* <div id="news"> */}
        {/* <div id="divDataArea"></div> */}
        {/* <script type="text/javascript" src="/js/topics/announcement_top.js" charset="utf-8"></script>
       		<script type="text/javascript" src="/js/topics/error.js" charset="utf-8"></script> */}
        {/* </div> */}
        {/* <!-- ================================= E-IRによる情報の自動出力に必要な部分 ========================== --> */}
        {/* <a href="ir/news/index.html" class="center bgWhite smallButtonCenter buttonW240 shadow deepBlue fontSize24" id="irNewsLink">
       		<p>ニュース一覧</p>
       	</a> */}
        {/* </div> */}
        {/* </div> */}
        <Information />
      </div>
    </section>
  );
};

export default Topics;
