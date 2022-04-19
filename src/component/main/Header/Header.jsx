import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__desktop">
          <div className="header__desktop__wrapper">
            <div className="header__desktop__logo">
              <picture>
                <img src="images/Logo.png" alt="getfit with physio logo" />
              </picture>
            </div>
            <div className="header__desktop__menu">
              <div className="header__desktop__menu__list">
                <Link to="/">
                  <h2 className="header__desktop__menu__list__item">
                    About us
                  </h2>
                </Link>
                <Link to="/">
                  <h2 className="header__desktop__menu__list__item">
                    Services
                  </h2>
                </Link>
                <Link to="/">
                  <h2 className="header__desktop__menu__list__item">News</h2>
                </Link>
                <Link to="/">
                  <h2 className="header__desktop__menu__list__item">Events</h2>
                </Link>
                <Link to="/">
                  <h2 className="header__desktop__menu__list__item">Article</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
