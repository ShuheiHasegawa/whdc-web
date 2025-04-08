import React from "react";
import TitleLeftLine from "../TitleLeftLine";
import HeroImage from "../HeroImage";
import SpotlightCard from "../../components/reactbits/ui/SpotlightCard/SpotlightCard";
import CenteredLayoutContainer from "../CenteredLayoutContainer";

const About = () => {
  const features = [
    "ワイハウが提供するのは価値創造の場＝企業再成プラットフォームです。これは「みんなで豊かになる」ために組織と個人が繋がり合い学び合う場を指します。",
    "日本には中堅企業・成長企業が約１０万社存在しています。こうした企業群が潜在的なワイハウの顧客であり仲間となります。",
    "ワイハウに参加する企業のオーナーは、ワイハウグループ入りした後も社長を続投し、同時に株式交換等を通じてワイハウ本社の大株主となります。",
    "資本で繋がるからこそ、グループ会社間の社長同士の切磋琢磨が株価や配当を通じた実利をももたらし、価値創造への意欲を後押しします。",
    "ワイハウは、金融資本を持たないが意欲のある経営人材候補者に経営経験と経営知識という「無形資本」を提供します。",
    "ワイハウは「ビジネスモデル囲碁」「滞留理論」「価値創造三種の神器」など、ワイハウ独自の経営理論を開発しており、これらをグループ企業間で共有します。",
    "ワイハウ自体もグループ企業と横並びで事業を営みつつ、実践に根差した新しい経営理論を開発していきます。",
    "年に一度、グループ会社の利益の半分を配当していただき、これにワイハウ単体利益を加えて、グループ内留保、自社株買い、配当へと使用していきます。",
    "ワイハウの意思決定にはグループ企業社長も投資委員会等を通じて参加します。",
    "多様な資本で繋がり合い、学び合う、経営者組合。これがワイハウの企業再成プラットフォームです。",
  ];

  return (
    <section className="intro-section pt-16">
      <div>
        <div className="pt-16">
          <HeroImage
            src="/img/whdc/about.png"
            alt="ワイハウの企業理念"
            height={240}
            objectFit="cover"
            priority
          />
        </div>

        <CenteredLayoutContainer>
          <p className="text-center">
            <span className="text-2xl text-white font-bold">
              30秒で分かるワイハウ
            </span>
          </p>

          <div className="pt-16 pl-16">
            <TitleLeftLine title="ワイハウの１０の特徴" />
          </div>
          <div className="row pt-16">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="feature-item">
                  <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div className="feature-content-wrapper">
                      <span className="feature-number bg-senary">
                        {index + 1}
                      </span>
                      <p className="feature-text text-white m-0 pl-16">
                        {feature}
                      </p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            ))}
          </div>
        </CenteredLayoutContainer>

        <style jsx>{`
          .image-container {
            overflow: hidden;
          }

          .feature-item {
            padding: 0.2rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: flex-start;
            transition: transform 0.3s ease;
            height: 100%;
          }

          .feature-item:hover {
            transform: translateY(-5px);
          }

          .feature-content-wrapper {
            display: flex;
            align-items: center;
          }

          .feature-number {
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .feature-text {
            text-align: left;
          }

          @media (max-width: 768px) {
            .main-title {
              font-size: 2rem;
            }

            .features-title {
              font-size: 1.5rem;
            }

            .feature-item {
              padding: 1rem;
            }

            .feature-text {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;
