import React from "react";
import { Link } from "react-router-dom";
import "./EventsAndWebinars.css";

export default function EventsAndWebinars() {
  return (
    <>
      <section
        className="events-and-webinars"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="container">
          <div className="events-and-webinars__wrapper ">
            <div
              className="events-and-webinars__title"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <h2>Events And Webinars</h2>
            </div>
            <div
              className="events-and-webinars__content"
              style={{
                backgroundImage: `url("/images/eventsandwebinars_bg.png")`,
              }}
            >
              <div className="events-and-webinars__content__wrapper">
                <div className="events-and-webinars__content__list">
                  <div
                    className="events-and-webinars__content__list__item"
                    data-aos="fade-left"
                    data-aos-duration="600"
                  >
                    <Link to="/">
                      <div className="events-and-webinars__content__list__item__wrapper">
                        <div className="events-and-webinars__content__list__item__title">
                          <h3>Auto Immune Treatment</h3>
                        </div>
                        <div className="events-and-webinars__content__list__item__date">
                          <h2>17-Feb-2021</h2>
                        </div>
                        <div className="events-and-webinars__content__list__item__desc">
                          <p>Auto Immune Treatment</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="events-and-webinars__content__list__item"
                    data-aos="fade-left"
                    data-aos-duration="900"
                  >
                    <Link to="/">
                      <div className="events-and-webinars__content__list__item__wrapper">
                        <div className="events-and-webinars__content__list__item__title">
                          <h3>Auto Immune Treatment</h3>
                        </div>
                        <div className="events-and-webinars__content__list__item__date">
                          <h2>17-Feb-2021</h2>
                        </div>
                        <div className="events-and-webinars__content__list__item__desc">
                          <p>Auto Immune Treatment</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="events-and-webinars__content__list__item"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <Link to="/">
                      <div className="events-and-webinars__content__list__item__wrapper">
                        <div className="events-and-webinars__content__list__item__title">
                          <h3>Auto Immune Treatment</h3>
                        </div>
                        <div className="events-and-webinars__content__list__item__date">
                          <h2>17-Feb-2021</h2>
                        </div>
                        <div className="events-and-webinars__content__list__item__desc">
                          <p>Auto Immune Treatment</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
