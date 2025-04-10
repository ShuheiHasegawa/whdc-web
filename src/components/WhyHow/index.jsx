import React from "react";
import Split from "../Split";
import Link from "next/link";

const WhyHow = ({ img, theme, subBG }) => {
  return (
    <section
      className={`call-action section-padding ${subBG ? "sub-bg" : ""} bg-img`}
      style={{ backgroundImage: `url(${img ? img : "/img/pattern.png"})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content pb-16 pl-32">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  Let&apos;s Know
                </h6>
                <h2
                  className="wow words custom-font chars splitting text-white"
                  data-splitting
                >
                  <b>ワイハウの10の特徴</b>
                </h2>
                <span>
                説明文なしより、ワイハウとはどういう企業なのか？という1、2行の文をいれてみてはいかがでしょうか？ボタンだけよりかはデザインてきになるのではないでしょうか？
                </span>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href="/about">
              <a
                className={`btn-curve ${
                  theme == "light" ? "btn-blc" : "btn-lit"
                } wow fadeInUp mx-auto d-inline-block`}
                data-wow-delay=".5s"
              >
                <span>詳しく見る</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHow;
