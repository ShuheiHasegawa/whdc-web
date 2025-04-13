import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";

const SplitScrollSection = ({
  fixedContent,
  scrollContent = [],
  className = "",
}) => {
  const sectionRef = useRef(null);
  const fixedRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      
      gsap.registerPlugin(ScrollTrigger);

      const scrollSections = gsap.utils.toArray(`.${styles.scrollSection}`);
      
      scrollSections.forEach((section, i) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            toggleClass: styles.active,
            markers: false,
          },
          opacity: 1,
          y: 0,
        });
      });
    };

    initGSAP();

    return () => {
      import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      });
    };
  }, [scrollContent.length]);

  return (
    <div ref={sectionRef} className={`${styles.container} ${className}`}>
      <div className={styles.fixedWrapper}>
        <div ref={fixedRef} className={styles.fixedSection}>
          {fixedContent}
        </div>
      </div>
      <div ref={scrollRef} className={styles.scrollSections}>
        {scrollContent.map((content, index) => (
          <div
            key={index}
            className={styles.scrollSection}
            style={{
              opacity: 0,
              transform: "translateY(50px)",
            }}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SplitScrollSection), {
  ssr: false
});