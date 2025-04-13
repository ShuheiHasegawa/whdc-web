import React from "react";
import Script from "next/script";
import loadingPace from "../../common/loadingPace.js";
import appData from "../../data/app.json";

const LoadingScreen = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();

      // ローディング中は強制的にスクロールを無効化
      bodyEl.style.overflow = "hidden";
      bodyEl.style.height = "100%";
      bodyEl.style.position = "fixed";
      bodyEl.style.width = "100%";
      // スクロール位置を保存
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      bodyEl.style.top = `-${scrollPos}px`;

      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }

      // Pace.js の完了イベントを監視
      if (typeof window !== "undefined") {
        window.Pace.on("done", function() {
          // アニメーション完了まで待機
          setTimeout(() => {
            // 強制的にすべてのスタイルを解除
            bodyEl.style.overflow = "";
            bodyEl.style.height = "";
            bodyEl.style.position = "";
            bodyEl.style.width = "";
            bodyEl.style.top = "";
            
            // アニメーションクラスを削除
            bodyEl.classList.remove("pace-running");
            bodyEl.classList.remove("pace-done");
            
            // バックアップとして明示的にスクロール可能にする
            document.documentElement.style.overflow = "auto";
            bodyEl.style.overflow = "auto";
            
            // 保存していたスクロール位置に戻る
            window.scrollTo(0, scrollPos);
            
            // console.log("スクロール有効化完了: " + new Date().toTimeString());
          }, 1500);
        });
      }
    } else {
      bodyEl.classList.add("hideX");
      // ローディングを表示しない場合はスクロールを有効に
      bodyEl.style.overflow = "";
      bodyEl.style.height = "";
      bodyEl.style.position = "";
      bodyEl.style.width = "";
      bodyEl.style.top = "";
    }

    // クリーンアップ関数
    return () => {
      // コンポーネントがアンマウントされた時にスクロールを再有効化
      bodyEl.style.overflow = "";
      bodyEl.style.height = "";
      bodyEl.style.position = "";
      bodyEl.style.width = "";
      bodyEl.style.top = "";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div id="preloader"></div>
      </div>
      {appData.showLoading ? (
        <>
          <Script
            id="pace"
            strategy="beforeInteractive"
            src="/js/pace.min.js"
          ></Script>
          <style jsx global>{`
            /* ローディング中のスタイル */
            body.pace-running {
              overflow: hidden !important;
              height: 100% !important;
              position: fixed !important;
              width: 100% !important;
              touch-action: none !important;
            }
            
            /* アニメーションは簡略化して、JavsScriptでの制御を優先 */
            body.pace-done {
              transition: all 0.5s ease;
            }
            
            /* プリローダーのz-indexを上げる */
            #preloader {
              z-index: 9999 !important;
            }
          `}</style>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default LoadingScreen;
