/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";
import RectRippleEffect from "../rippleEffect/RectRippleEffect";

const ProfileCard = ({ 
  imageUrl = "", 
  name = "", 
  position = "", 
  career = [
  ]
}) => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      featuresEffect();
      setTimeout(() => {
        thumparallaxDown();
      }, 1000);
    }
  }, []);
  
  return (
    <section className="min-area sub-bg" style={{
      marginBottom: '80px'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              {/* <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              /> */}
                  <RectRippleEffect 
                    imageUrl={imageUrl}
                    dropRadius={35}
                    perturbance={0.04}
                    width="300px"
                    height="400px"
                  />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  {name}
                </h4>
                    <h2 style={{ 
                      color: '#1baa80',
                      fontSize: '1.4rem',
                      fontWeight: '300',
                      letterSpacing: '0.1em',
                      margin: 0
                    }}>{position}</h2>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  <span>経歴</span>
                </p>
              </Split>
              <ul className="feat">
                {career.map((item, index) => (
                  <li 
                    key={index}
                    className="wow fadeInUp" 
                    data-wow-delay=".2s" 
                    style={{ padding: '0 0 0 0' }}
                  >
                    <span className="year">{item.year}</span>{item.description}
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
