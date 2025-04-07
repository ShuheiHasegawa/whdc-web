import React from "react";

const Services = () => {
  return (
    <section id="services-section" className="services section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".1s">
                BEST FEATURES
              </h6>
              <h3
                className="wow words chars splitting text-white"
                data-splitting
              >
                SERVICES
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="wow fadeInUp p-8" data-wow-delay="0.2s">
              <p
                className="text-description text-white text-lg"
              >
                価値創造の力で、もう一度豊かになる。<br />
                当社はこれから全社的ビジネスモデルとして「企業再&quot;成&quot;プラットフォーム」を掲げます。
                まずは通常の事業再生を、次に「売らない事業承継」を、最後に「ビジネスモデル総合商社」を手掛けていきます。
              </p>
              <p
                className="text-description text-white text-lg"
              >
                こうしてM&A業界における総合ディベロッパーのような唯一無二の存在を目指していきます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
