import React from "react";
import SplitScrollSection from "../../components/ScrollTrigger";
import TitleLeftLine from "../../components/TitleLeftLine";

const AboutParallax = () => {
  const videoRef = React.useRef(null);

  const fixedContent = (
    <div>
      <h1>ワイハウの１０の特徴</h1>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.3,
          transition: "opacity 0.1s ease-out",
        }}
      >
        <source src="/movies/top-four-720p.mp4" type="video/mp4" />
      </video>
    </div>
  );

  const scrollContent = [
    <div key="1">
      <TitleLeftLine title="1. 企業再成プラットフォーム" size="text-3xl" />
      <p className="pt-8 text-xl">
        ワイハウが提供するのは価値創造の場＝企業再成プラットフォームです。これは「みんなで豊かになる」ために組織と個人が繋がり合い学び合う場を指します。
      </p>
    </div>,
    <div key="2">
      <TitleLeftLine title="2. 潜在的な顧客と仲間" size="text-3xl" />
      <p className="pt-8 text-xl">
        日本には中堅企業・成長企業が約１０万社存在しています。こうした企業群が潜在的なワイハウの顧客であり仲間となります。
      </p>
    </div>,
    <div key="3">
      <TitleLeftLine title="3. オーナーと大株主" size="text-3xl" />
      <p className="pt-8 text-xl">
        ワイハウに参加する企業のオーナーは、ワイハウグループ入りした後も社長を続投し、同時に株式交換等を通じてワイハウ本社の大株主となります。
      </p>
    </div>,
    <div key="4">
      <TitleLeftLine title="4. 資本で繋がる意義" size="text-3xl" />
      <p className="pt-8 text-xl">
        資本で繋がるからこそ、グループ会社間の社長同士の切磋琢磨が株価や配当を通じた実利をももたらし、価値創造への意欲を後押しします。
      </p>
    </div>,
    <div key="5">
      <TitleLeftLine title="5. 無形資本の提供" size="text-3xl" />
      <p className="pt-8 text-xl">
        ワイハウは、金融資本を持たないが意欲のある経営人材候補者に経営経験と経営知識という「無形資本」を提供します。
      </p>
    </div>,
    <div key="6">
      <TitleLeftLine title="6. 独自の経営理論" size="text-3xl" />
      <p className="pt-8 text-xl">
        ワイハウは「ビジネスモデル囲碁」「滞留理論」「価値創造三種の神器」など、ワイハウ独自の経営理論を開発しており、これらをグループ企業間で共有します。
      </p>
    </div>,
    <div key="7">
      <TitleLeftLine title="7. 実践に根差した開発" size="text-3xl" />
      <p className="pt-8 text-xl">
        ワイハウ自体もグループ企業と横並びで事業を営みつつ、実践に根差した新しい経営理論を開発していきます。
      </p>
    </div>,
    <div key="8">
      <TitleLeftLine title="8. 利益の分配" size="text-3xl" />
      <p className="pt-8 text-xl">
        年に一度、グループ会社の利益の半分を配当していただき、これにワイハウ単体利益を加えて、グループ内留保、自社株買い、配当へと使用していきます。
      </p>
    </div>,
    <div key="9">
      <TitleLeftLine title="9. 参加型の意思決定" size="text-3xl" />
      <p className="pt-8 text-xl">
        ワイハウの意思決定にはグループ企業社長も投資委員会等を通じて参加します。
      </p>
    </div>,
    <div key="10">
      <TitleLeftLine title="10. 経営者組合の理念" size="text-3xl" />
      <p className="pt-8 text-xl">
        多様な資本で繋がり合い、学び合う、経営者組合。これがワイハウの企業再成プラットフォームです。
      </p>
    </div>,
  ];

  return (
    <SplitScrollSection
      fixedContent={fixedContent}
      scrollContent={scrollContent}
    />
  );
};

export default AboutParallax;
