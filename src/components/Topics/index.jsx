/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import styles from "./styles.module.css";
import HeroImage from "../HeroImage";
import Link from "next/link";
import Information from "../Information";
import SpotlightCard from "../reactbits/ui/SpotlightCard/SpotlightCard";

const Topics = () => {
  return (
    <section className={`${styles.topics} section-padding`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className={styles.secHead}>
              <h6 className="wow fadeIn" data-wow-delay=".1s">
                LATEST NEWS
              </h6>
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  TOPICS
                </h3>
              </Split>
            </div>
          </div>
        </div>

        <Information />

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
                      src="/img/top/kigyougaiyou_01.png"
                      alt="会社概要"
                      mobileHeight="100px"
                      tabletHeight="120px"
                      desktopHeight="140px"
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
                  href="/ir/ir/index.html"
                  passHref
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <HeroImage
                      src="/img/top/firstview_ir_768.png"
                      alt="株主・投資家情報"
                      mobileHeight="100px"
                      tabletHeight="120px"
                      desktopHeight="140px"
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


      </div>
    </section>
  );
};

export default Topics;
