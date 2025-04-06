/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { useRouter } from "next/router";

const Navbar = ({ lr, nr, theme }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // 少し遅延させてDOMが確実に描画されたあとに実行
    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        // オフセット位置を計算（より正確に）
        const navHeight = nr.current ? nr.current.offsetHeight - 100 : 80;
        console.log(navHeight);

        // 要素の絶対位置を取得
        const rect = section.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const offsetPosition = rect.top + scrollTop - navHeight - 20; // 余白を追加
        console.log(offsetPosition);

        // スムーズスクロール
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // スクロール完了後に位置調整（必要に応じて）
        setTimeout(() => {
          const newRect = section.getBoundingClientRect();
          if (newRect.top < navHeight + 10) {
            window.scrollBy({
              top: newRect.top - navHeight - 20,
              behavior: "smooth",
            });
          }
        }, 1000);
      } else {
        console.error(`Section with ID ${sectionId} not found`);
        router.push("/");
      }
    }, 100);
  };

  const handleMobileDropdown = () => {
    // 状態はボタンのonClickで切り替えているため、ここでは切り替えない
    // setIsOpen(!isOpen);

    const navbarElement = document.querySelector(".navbar-collapse");

    if (navbarElement) {
      navbarElement.classList.toggle("show-with-trans");
      navbarElement.classList.toggle("show");
    }
  };

  useEffect(() => {
    // コンポーネントがマウントされたときに実行
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navbarSupportedContent");
      if (
        isOpen &&
        navbar &&
        !navbar.contains(event.target) &&
        !event.target.closest(".navbar-toggler")
      ) {
        setIsOpen(false);
        navbar.classList.remove("show-with-trans");
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (typeof window !== "undefined") {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [isOpen]);

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg ${theme === "themeL" ? "light" : ""}`}
    >
      <div className="container p-0">
        <Link href="/">
          <a className="logo">
            <style jsx>{`
              .logo img {
                width: 200px;
                transition: width 0.3s ease;
              }

              @media screen and (max-width: 767px) {
                .logo img {
                  width: 140px; /* スマホ向けに小さくする */
                }
              }

              @media screen and (max-width: 480px) {
                .logo img {
                  width: 120px; /* さらに小さい画面向け */
                }
              }
            `}</style>
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen); // 状態を切り替え
            handleMobileDropdown();
          }}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <div className="hamburger-icon">
            <span className={isOpen ? "first-line open" : "first-line"}></span>
            <span
              className={isOpen ? "middle-line open" : "middle-line"}
            ></span>
            <span className={isOpen ? "last-line open" : "last-line"}></span>
          </div>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show-with-trans" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("top-section")}
                style={{ cursor: "pointer" }}
              >
                TOP
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("group-companies-section")}
                style={{ cursor: "pointer" }}
              >
                GROUP
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("services-section")}
                style={{ cursor: "pointer" }}
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                TEAMS
              </span>
              <div className="dropdown-menu">
                <Link href="/company/management_team">
                  <a className="dropdown-item">Management Team</a>
                </Link>
                <Link href="/company/governance_team">
                  <a className="dropdown-item">Governance Team</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/ir">
                <a className="nav-link">IR</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">CONTACT</a>
              </Link>
            </li>
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href="/home/home1-dark">
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href="/home/home2-dark">
                  <a className="dropdown-item">Creative Studio</a>
                </Link>
                <Link href="/home/home3-dark">
                  <a className="dropdown-item">Business Startup</a>
                </Link>
                <Link href="/home/home4-dark">
                  <a className="dropdown-item">One Page</a>
                </Link>
                <Link href="/home/home5-dark">
                  <a className="dropdown-item">Freelancer</a>
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Showcases
              </span>
              <div className="dropdown-menu">
                <Link href="/showcase/showcase-dark">
                  <a className="dropdown-item">Full Screen</a>
                </Link>
                <Link href="/showcase2/showcase2-dark">
                  <a className="dropdown-item">Creative Carousel</a>
                </Link>
                <Link href="/showcase3/showcase3-dark">
                  <a className="dropdown-item">Radius Carousel</a>
                </Link>
                <Link href="/showcase4/showcase4-dark">
                  <a className="dropdown-item">Columns Carousel</a>
                </Link>
                <Link href="/showcase5/showcase5-dark">
                  <a className="dropdown-item">Boxed Carousel</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about/about-dark">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                portfolio
              </span>
              <div className="dropdown-menu">
                <Link href="/works/works-dark">
                  <a className="dropdown-item">Mouse Info</a>
                </Link>
                <Link href="/works2/works2-dark">
                  <a className="dropdown-item">Masonry 3 Columns</a>
                </Link>
                <Link href="/works3/works3-dark">
                  <a className="dropdown-item">Masonry 2 Columns</a>
                </Link>
                <Link href="/works4/works4-dark">
                  <a className="dropdown-item">Pinterest List</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
                <a className="nav-link">Contact</a>
              </Link>
            </li> */}
          </ul>
          {/* <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.search = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
