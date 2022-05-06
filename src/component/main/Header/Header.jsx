import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 10
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  return (
    <header>
      <div className="header">
        <div className="header__desktop">
          <div className="header__desktop__wrapper">
            <div className="header__desktop__logo">
              <Link to="/">
                <picture>
                  <img src="images/Logo.png" alt="getfit with physio logo" />
                </picture>
              </Link>
            </div>
            <div className="header__desktop__menu">
              <div className="header__desktop__menu__list">
                <Link to="/about_us">
                  <h2 className="header__desktop__menu__list__item">
                    About us
                  </h2>
                </Link>
                <Link to="/services">
                  <h2 className="header__desktop__menu__list__item">
                    Services
                  </h2>
                </Link>
                <Link to="/">
                  <h2 className="header__desktop__menu__list__item">News</h2>
                </Link>
                <Link to="/events-and-webinars">
                  <h2 className="header__desktop__menu__list__item">Events</h2>
                </Link>
                <Link to="/article">
                  <h2 className="header__desktop__menu__list__item">Article</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header__mobile">
          <div className="header__mobile__wrapper">
            <div className="header__mobile__logo">
              <Link to="/">
                <picture>
                  <img src="images/Logo.png" alt="getfit with physio logo" />
                </picture>
              </Link>
            </div>
            <div className="header__mobile__menu">
              <div className="header__mobile__menu__hamburger">
                <button onClick={() => setShowMenu(!showMenu)}>
                  <picture>
                    <img
                      src="images/hamburger.png"
                      alt="getfit with physio logo"
                    />
                  </picture>
                </button>
              </div>
              {showMenu ? (
                <div className="header__mobile__menu__list">
                  <Link to="/about_us">
                    <div
                      className="header__mobile__menu__list__item"
                      data-aos="fade-left"
                      data-aos-duration="300"
                    >
                      <h2>About us</h2>
                    </div>
                  </Link>
                  <Link to="/services">
                    <div
                      className="header__mobile__menu__list__item"
                      data-aos="fade-left"
                      data-aos-duration="600"
                    >
                      <h2>Services</h2>
                    </div>
                  </Link>
                  <Link to="/">
                    <div
                      className="header__mobile__menu__list__item"
                      data-aos="fade-left"
                      data-aos-duration="900"
                    >
                      <h2>News</h2>
                    </div>
                  </Link>
                  <Link to="/events-and-webinars">
                    <div
                      className="header__mobile__menu__list__item"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      <h2>Events</h2>
                    </div>
                  </Link>
                  <Link to="/article">
                    <div
                      className="header__mobile__menu__list__item"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <h2>Article</h2>
                    </div>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
