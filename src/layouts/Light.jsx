/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

const LightTheme = ({ children, bdOn }) => {
  if (bdOn) {
    React.useEffect(() => {
      document.querySelector("body").classList.add("bd-dark");
      return () => {
        document.querySelector("body").classList.remove("bd-dark");
      };
    });
  }
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/light.css" />
      </Head>
      <div className="light-theme-wrapper" style={{ backgroundColor: "#fff" }}>
        {children}
      </div>
    </>
  );
};

export default LightTheme;
