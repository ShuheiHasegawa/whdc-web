import React from "react";
import works1SliderData from "../../data/sections/works1Slider.json";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ImageSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section className="work-carousel section-padding pt-0 metro position-re">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper
                className="swiper-wrapper"
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    if (swiper && swiper.params && swiper.params.navigation) {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;
                    }
                    if (swiper && swiper.navigation) {
                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                  });
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    centeredSlides: false,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                }}
              >
                {works1SliderData.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide">
                    <div
                      className="content wow noraidus fadeInUp p-32"
                      data-wow-delay=".3s"
                    >
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                          borderRadius: "8px",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                          overflow: "hidden",
                          transition: "all 0.3s ease",
                          filter: "brightness(0.95) contrast(1.05)",
                          aspectRatio: "1/1",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.03)";
                          e.currentTarget.style.boxShadow =
                            "0 15px 35px rgba(0,0,0,0.2)";
                          e.currentTarget.style.filter =
                            "brightness(1.05) contrast(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 30px rgba(0,0,0,0.15)";
                          e.currentTarget.style.filter =
                            "brightness(0.95) contrast(1.05)";
                        }}
                      ></div>
                      {/* <div
                        className="cont"
                        style={{
                          padding: "20px 15px",
                          background: "rgba(255,255,255,0.03)",
                          backdropFilter: "blur(5px)",
                          borderRadius: "0 0 8px 8px",
                          marginTop: "-5px",
                        }}
                      >
                        <h6 className="color-font">
                          <Link href="/works/works-dark">
                            <a className="custom-link">{slide.title}</a>
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            <a className="custom-link-main">{slide.secTex}</a>
                          </Link>
                        </h4>
                      </div> */}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer pt-24"
              >
                <span className="simple-btn right">Next</span>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer pt-24"
              >
                <span className="simple-btn">Prev</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media screen and (max-width: 767px) {
          .item-img.bg-img {
            aspect-ratio: 1/1 !important;
            height: auto !important;
            min-height: unset !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ImageSlider;
