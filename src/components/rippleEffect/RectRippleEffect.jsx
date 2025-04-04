import React, { useEffect, useRef } from "react";

const RectRippleEffect = ({
  imageUrl,
  className,
  style,
  dropRadius = 20,
  perturbance = 0.03,
  resolution = 256,
  interactive = true,
  crossOrigin = "",
  width = "100%",
  height = "100%",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const initRipples = async () => {
      if (!containerRef.current) return;

      try {
        // jQueryが存在することを確認
        if (!window.jQuery) {
          const jquery = await import("jquery");
          window.jQuery = jquery.default;
          window.$ = jquery.default;
        }

        // jquery.ripplesが存在することを確認
        if (!window.jQuery.fn.ripples) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src =
              "https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // ripples効果を初期化
        const $ = window.jQuery;
        $(containerRef.current).ripples({
          resolution: 512,
          dropRadius: dropRadius,
          perturbance: perturbance,
        });
      } catch (error) {
        console.error("Failed to initialize ripples:", error);
      }
    };

    initRipples();

    // クリーンアップ関数
    return () => {
      if (containerRef.current && window.jQuery) {
        try {
          window.jQuery(containerRef.current).ripples("destroy");
        } catch (error) {
          console.error("Failed to destroy ripples:", error);
        }
      }
    };
  }, [dropRadius, perturbance]);

  // プログラムで波紋を作成するメソッド
  const createDrop = (x, y, radius = dropRadius, strength = 0.04) => {
    if (containerRef.current) {
      $(containerRef.current).ripples("drop", x, y, radius, strength);
    }
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        background: `url(${imageUrl}) center center/cover no-repeat`,
        width: width,
        height: height,
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
        ...style,
      }}
    />
  );
};

export default RectRippleEffect;
