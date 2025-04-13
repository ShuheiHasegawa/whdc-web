import React from "react";
import LetterGlitch from "../../Backgrounds/LetterGlitch/LetterGlitch";
// import HeroImage from "../HeroImage";

const SectionHeader = ({
  text = ""
}) => {
  return (
    <>
      <LetterGlitch
        text={text}
        textClassName="text-10xl font-bold"
        height="300px"
        glitchSpeed={100}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      {/* <HeroImage
        src="/img/whdc/company/firstview_02_2022.png"
        alt="firstview_about"
        objectFit="cover"
        priority
      /> */}
    </>
  );
};

export default SectionHeader;