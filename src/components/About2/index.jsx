import React from "react";
import TitleLeftLine from "../TitleLeftLine";
import HeroImage from "../HeroImage";
import InfiniteScroll from "../../components/reactbits/ui/InfiniteScroll/InfiniteScroll";

const About2 = () => {
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

  const infiniteScrollItems = features.map((feature, index) => ({
    id: index + 1,
    title: `特徴 ${index + 1}`,
    content: index + ". " + feature,
    image: `/img/whdc/features/feature-${index + 1}.jpg`, // 必要に応じて実際の画像パスに変更
    bg: index % 2 === 0 ? "light" : "dark", // 交互に背景色を変更
  }));

  return (
    <section className="intro-section">
      <div className="about-container">
        {/* <HeroImage
          src="/img/whdc/about.png"
          alt="ワイハウの企業理念"
          height={240}
          objectFit="cover"
          priority
        /> */}

        <div className="content-container pt-16 pb-16">
          <div className="pt-16 pl-16">
            <TitleLeftLine title="ワイハウの１０の特徴" />
          </div>
        </div>

        <div className="section-padding p-0">
          <div className="full-width-container height-100vh">
            <InfiniteScroll
              items={infiniteScrollItems}
              isTilted={false}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.3}
              autoplayDirection="up"
              pauseOnHover={true}
            />
          </div>
        </div>

        <style jsx>{`
          .about-container {
            margin: 0 auto;
          }

          .image-container {
            overflow: hidden;
          }

          @media (max-width: 768px) {
            .main-title {
              font-size: 2rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About2;
