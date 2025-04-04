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
    <section className="min-area sub-bg pt-12 pb-64">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
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
                .photo-credit {
                  text-align: center;
                  margin-top: 8px;
                  font-size: 0.875rem;
                  color: rgba(255, 255, 255, 0.7);
                }
                .photo-credit a {
                  color: rgba(255, 255, 255, 0.7);
                  text-decoration: underline;
                  text-underline-offset: 2px;
                  transition: all 0.3s ease;
                  padding-right: 16px;
                  position: relative;
                }
                .photo-credit a:hover {
                  color: #fff;
                }
                .photo-credit a:after {
                  content: "↗";
                  position: absolute;
                  right: 0;
                  top: -2px;
                  font-size: 1rem;
                  opacity: 0.8;
                }
                .photo-credit a:hover:after {
                  opacity: 1;
                  transform: translateX(2px) translateY(-2px);
                  transition: all 0.3s ease;
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
              <div className="photo-credit">
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
                  style={{
                    color: "#1baa80",
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
                  className="wow txt words chars splitting pt-16 pl-16"
                  data-splitting
                >
                  <span>経歴</span>
                </p>
              </Split>
              <ul className="feat pl-16">
                {career.map((item, index) => (
                  <li
                    key={index}
                    className="wow fadeInUp"
                    data-wow-delay=".2s"
                    style={{
                      color: "#fff",
                      // fontSize: "clamp(1.25rem, 4vw, 2rem)",
                      // fontWeight: "normal",
                      padding: "0 0 8px 0",
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
