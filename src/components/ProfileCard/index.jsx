/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";
import RectRippleEffect from "../rippleEffect/RectRippleEffect";

const ProfileCard = ({
  imageUrl = "",
  name = "",
  position = "",
  career = [],
}) => {
  const createSafeHTML = (content) => {
    if (typeof window !== "undefined") {
      return DOMPurify.sanitize(content, {
        ALLOWED_TAGS: ["br"],
        ALLOWED_ATTR: [],
      });
    }
    return content;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      featuresEffect();
      setTimeout(() => {
        thumparallaxDown();
      }, 1000);
    }
  }, []);

  return (
    <section className="sub-bg pt-12 pb-64">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 mb-lg-0 mb-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="img"
              style={{
                background: "none",
                position: "relative",
                padding: "0 !important",
              }}
            >
              <style jsx>{`
                .img:after {
                  display: none;
                }
              `}</style>
              <RectRippleEffect
                imageUrl={imageUrl}
                dropRadius={5}
                perturbance={0.08}
                resolution={128}
                width="300px"
                height="400px"
              />
              <div className="external-link">
                photograph by{" "}
                <a
                  href="https://www.shunichi-oda.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shunichi Oda
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content" style={{ padding: "24px !important" }}>
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                  style={{
                    color: "#fff",
                    fontSize: "clamp(1.25rem, 4vw, 2rem)",
                    fontWeight: "normal",
                    padding: "0 0 4px 0",
                    margin: "0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {name}
                </h4>
                <h2
                  className="color-primary"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "300",
                    letterSpacing: "0.1em",
                    padding: "8px 0 16px 0",
                    margin: 0,
                  }}
                >
                  {position}
                </h2>
              </Split>

              <Split>
                <p
                  className="wow txt words chars splitting pt-8 pl-8"
                  data-splitting
                >
                  <span className="text-white">経歴</span>
                </p>
              </Split>
              <ul className="feat pl-16">
                {career.map((item, index) => (
                  <li
                    key={index}
                    className="wow fadeInUp pb-16"
                    data-wow-delay=".2s"
                    style={{
                      color: "#fff",
                      // fontSize: "clamp(1.25rem, 4vw, 2rem)",
                      // fontWeight: "normal",
                      borderBottom: "0",
                    }}
                  >
                    <span
                      style={{
                        paddingRight: "8px",
                        textAlign: "left",
                        top: 0,
                        verticalAlign: "top",
                      }}
                    >
                      {item.year}
                    </span>
                    <span
                      style={{ verticalAlign: "top" }}
                      dangerouslySetInnerHTML={{
                        __html: createSafeHTML(item.description),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
