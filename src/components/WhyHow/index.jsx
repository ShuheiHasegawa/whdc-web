import React from "react";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

const WhyHow = ({ img, theme, subBG }) => {
  return (
    <section
      className="section-padding"
      // className={`call-action section-padding ${subBG ? "sub-bg" : ""} bg-img`}
      // style={{ backgroundImage: `url(${img ? img : "/img/pattern.png"})` }}
    >
      <div className="container">
        <SectionTitle title="ワイハウの10の特徴" subtitle="Let's Know" />
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="wow fadeInUp p-8" data-wow-delay="0.2s">
              <p className="text-description text-lg">
                ワイハウは「みんなで豊かになる」を理念に、企業と人材が共に成長する企業再成プラットフォームを提供しています。
              </p>
            </div>
            <div className="text-center pt-16">
              <Button
                href="/about"
                text="詳しく見る"
                // className="wow fadeInUp mx-auto d-inline-block"
                // data-wow-delay=".5s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHow;
