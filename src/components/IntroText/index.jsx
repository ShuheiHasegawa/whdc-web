import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
// SVGをReactコンポーネントとしてインポート
import CatchCopy01 from "../../../public/img/whdc/top/catchcopy_01.svg";
import CatchCopy02 from "../../../public/img/whdc/top/catchcopy_02.svg";
import CatchCopy03 from "../../../public/img/whdc/top/catchcopy_03.svg";
import CatchCopy04 from "../../../public/img/whdc/top/catchcopy_04.svg";

const IntroText = () => {
  const [show, setShow] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  
  useEffect(() => {
    // 2秒後にアニメーションを開始
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      // 最初の行を表示
      setVisibleLines(1);
      
      // 一定間隔で次の行を表示
      const lineTimers = [
        setTimeout(() => setVisibleLines(2), 1500),  // 1.5秒後に2行目
        setTimeout(() => setVisibleLines(3), 3000),  // 3秒後に3行目
        setTimeout(() => setVisibleLines(4), 4500)   // 4.5秒後に4行目
      ];

      return () => lineTimers.forEach(timer => clearTimeout(timer));
    }
  }, [show]);

  return (
    <div className={`${styles.introText} ${show ? styles.show : ""}`}>
      <div className={styles.svgContainer}>
        <div className={`${styles.svgWrapper} ${visibleLines >= 1 ? styles.visible : ''}`}>
          <CatchCopy01 className={styles.svgImage} />
        </div>
        <div className={`${styles.svgWrapper} ${visibleLines >= 2 ? styles.visible : ''}`}>
          <CatchCopy02 className={styles.svgImage} />
        </div>
        <div className={`${styles.svgWrapper} ${visibleLines >= 3 ? styles.visible : ''} pt-32`}>
          <CatchCopy03 className={styles.svgImage} />
        </div>
        <div className={`${styles.svgWrapper} ${visibleLines >= 4 ? styles.visible : ''}`}>
          <CatchCopy04 className={styles.svgImage} />
        </div>
      </div>
    </div>
  );
};

export default IntroText;
