/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";

const DarkTheme = ({ children, useSkin }) => {
  React.useEffect(() => {
    const loadBootstrap = async () => {
      if (typeof window !== "undefined") {
        try {
          const jquery = await import("jquery");
          window.jQuery = jquery.default;
          window.$ = jquery.default;
          await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        } catch (error) {
          console.error("Error loading Bootstrap:", error);
        }
      }
    };
    loadBootstrap();
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/dark.css" />
      </Head>
      <div className="dark-theme-wrapper" style={{ backgroundColor: "var(--bg-black)" }}>
        {children}
      </div>
    </>
  );
};

export default DarkTheme;
