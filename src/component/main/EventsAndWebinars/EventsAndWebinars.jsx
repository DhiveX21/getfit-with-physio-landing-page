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
              <h2>Seminar dan Acara</h2>
            </div>
            <div
              className="events-and-webinars__content"
              style={{
                backgroundImage: `url("/images/eventsandwebinars_bg1.jpg")`,
              }}
            >
              <div className="events-and-webinars__content__wrapper">
                <div className="events-and-webinars__content__list">
                  <div
                    className="events-and-webinars__content__list__item"
                    data-aos="fade-left"
                    data-aos-duration="600"
                  >
                    <Link to="/events-and-webinars">
                      <div className="events-and-webinars__content__list__item__wrapper">
                        <div className="events-and-webinars__content__list__item__title">
                          <h3>Seminar Kesehatan Wanita</h3>
                        </div>
                        <div className="events-and-webinars__content__list__item__date">
                          <h2>20-Feb-2022</h2>
                        </div>
                        <div className="events-and-webinars__content__list__item__desc">
                          <p>
                            Kesehatan Wanita dari sisi penglihatan fisioterapi
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="events-and-webinars__content__list__item"
                    data-aos="fade-left"
                    data-aos-duration="900"
                  >
                    <Link to="/events-and-webinars">
                      <div className="events-and-webinars__content__list__item__wrapper">
                        <div className="events-and-webinars__content__list__item__title">
                          <h3>Auto Immune Treatment</h3>
                        </div>
                        <div className="events-and-webinars__content__list__item__date">
                          <h2>17-Sep-2021</h2>
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
                    <Link to="/events-and-webinars">
                      <div className="events-and-webinars__content__list__item__wrapper">
                        <div className="events-and-webinars__content__list__item__title">
                          <h3>Posture Improvement</h3>
                        </div>
                        <div className="events-and-webinars__content__list__item__date">
                          <h2>22-Aug-2021</h2>
                        </div>
                        <div className="events-and-webinars__content__list__item__desc">
                          <p>Pengecekan Posture dengan segala pengaruh nya</p>
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
