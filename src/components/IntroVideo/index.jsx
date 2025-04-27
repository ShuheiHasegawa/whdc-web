import React, { useRef, useEffect, useState } from "react";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import IntroText from "../IntroText";

const IntroVideo = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fadeWhenScroll();

    setTimeout(() => {
      setLoad(false);
    }, 1000);

    if (videoRef.current) {
      // videoのロードイベントハンドラ
      const handleVideoLoaded = () => {
        setIsVideoLoaded(true);

        // ビデオのロード完了後に表示
        videoRef.current.style.opacity = "0.8";

        // 初回読み込み時のみ、2秒後に再生開始
        setTimeout(() => {
          videoRef.current.play().catch((e) => {
            console.log("自動再生できませんでした:", e);
            // モバイルの場合はユーザー操作後に再生
            document.body.addEventListener(
              "touchstart",
              () => {
                videoRef.current.play().catch(() => {});
              },
              { once: true }
            );
          });
        }, 2000);
      };

      // ループ前のフェードアウト、ループ後のフェードインを処理
      const handleTimeUpdate = () => {
        if (!videoRef.current || !videoRef.current.duration) return;

        const timeLeft =
          videoRef.current.duration - videoRef.current.currentTime;

        // ループ直前は透明度を下げる
        if (timeLeft < 0.5 && timeLeft > 0) {
          videoRef.current.style.opacity = "0";
        }
        // ループ直後は透明度を戻す
        else if (
          videoRef.current.currentTime < 0.5 &&
          videoRef.current.currentTime > 0
        ) {
          setTimeout(() => {
            if (videoRef.current) videoRef.current.style.opacity = "0.8";
          }, 100);
        }
      };

      // イベントリスナーの登録
      videoRef.current.addEventListener("loadeddata", handleVideoLoaded);
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

      // クリーンアップ
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("loadeddata", handleVideoLoaded);
          videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        }
      };
    }
  }, []);

  return (
    <header
      className="slider slider-prlx fixed-slider text-center"
      style={{
        height: "calc(100vh - var(--header-height))",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="video-container parallax-slider"
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            objectFit: "cover",
            zIndex: 0,
            opacity: 0, // 最初は非表示
            transition: "opacity 0.5s ease-out",
          }}
        >
          <source src="/movies/top-four-h264-720p.mp4" type="video/mp4" />
        </video>
        <div
          className="caption"
          style={{
            position: "absolute",
            top: "26vh",
            left: "0",
            right: "0",
            margin: "0 auto",
            zIndex: 1,
            width: "100%",
          }}
        >
          <IntroText />
        </div>

        {/* <div
          className="social-icon"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <a href="#0">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#0">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#0">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#0">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default IntroVideo;
