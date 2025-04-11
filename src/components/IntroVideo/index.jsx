import React, { useRef, useEffect } from "react";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import IntroText from "../IntroText";

const SingleVideoWithSmootherLoop = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const handleTimeUpdate = () => {
        const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
        if (timeLeft < 0.1) {
          requestAnimationFrame(() => {
            videoRef.current.currentTime = 0;
          });
        }
      };

      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      return () => videoRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        objectFit: "cover",
        zIndex: 0,
        opacity: 0.8,
        transition: 'opacity 0.1s ease-out',
      }}
    >
      <source src="/movies/top-720p.mp4" type="video/mp4" />
    </video>
  );
};

const IntroVideo = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
      style={{
        height: "100vh",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="video-container parallax-slider"
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        <SingleVideoWithSmootherLoop />
        <div
          className="caption"
          style={{
            position: "absolute",
            top: "30vh",
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
