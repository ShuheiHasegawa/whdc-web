import React, { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const scrollTriggersRef = useRef([]);

  // モバイル状態を検出する関数
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    // 初期ロード時とリサイズ時にモバイル状態をチェック
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    let gsapInstance;
    let ScrollTrigger;
    
    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      
      gsapInstance = gsapModule.default;
      ScrollTrigger = ScrollTriggerModule.default;
      
      gsapInstance.registerPlugin(ScrollTrigger);

      // 既存のScrollTriggerをクリーンアップ
      if (scrollTriggersRef.current.length > 0) {
        scrollTriggersRef.current.forEach(trigger => trigger.kill());
        scrollTriggersRef.current = [];
      }

      // スクロールセクションを取得
      const scrollSections = gsapInstance.utils.toArray(`.${styles.scrollSection}`);
      
      // モバイルとデスクトップで異なる設定を適用
      scrollSections.forEach((section, i) => {
        const trigger = ScrollTrigger.create({
          trigger: section,
          start: isMobile ? "top 70%" : "top center", // モバイルでは表示トリガーを上方に移動
          end: isMobile ? "bottom 50%" : "bottom center",
          scrub: isMobile ? 0.5 : 1, // モバイルではよりスムーズに
          toggleClass: {
            targets: section,
            className: styles.active
          },
          markers: false,
          onEnter: () => {
            // クラス追加だけでなく、直接スタイルも設定（バックアップとして）
            gsapInstance.to(section, {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.3 : 0.5
            });
          },
          onLeaveBack: () => {
            // 上にスクロールして要素から離れるとき
            if (!isMobile) {
              gsapInstance.to(section, {
                opacity: 0,
                y: 50,
                duration: 0.5
              });
            }
          }
        });
        
        scrollTriggersRef.current.push(trigger);
      });

      // 初期状態でスクロール位置に応じたアニメーション状態を設定
      ScrollTrigger.refresh();
    };

    initGSAP();

    return () => {
      // クリーンアップ
      if (ScrollTrigger) {
        scrollTriggersRef.current.forEach(trigger => trigger.kill());
      }
    };
  }, [scrollContent.length, isMobile]); // isMobileの変更も監視

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