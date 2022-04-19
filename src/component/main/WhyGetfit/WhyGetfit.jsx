import React from "react";
import { Link } from "react-router-dom";
import "./WhyGetfit.css";

export default function WhyGetfit() {
  return (
    <>
      <section
        className="why-getfit"
        style={{
          backgroundColor: "#E0E0E0",
          backgroundImage: "url('images/whygetfit_bg.png')",
        }}
      >
        <div className="container">
          <div className="why-getfit__wrapper">
            <div
              className="why-getfit__title"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <h2>Why Getfit ?</h2>
            </div>
            <div className="why-getfit__content">
              <div className="why-getfit__content__wrapper">
                <div
                  className="why-getfit__content__img"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <picture>
                    <img
                      src="images/whygetfit_cs.png"
                      alt="customer services"
                    />
                  </picture>
                </div>
                <div className="why-getfit__content__list">
                  <div className="why-getfit__content__list__wrapper">
                    <div
                      className="why-getfit__content__list__item"
                      data-aos="fade-left"
                      data-aos-duration="600"
                    >
                      <Link>
                        <div className="why-getfit__content__list__item__wrapper">
                          <div className="why-getfit__content__list__item__icon">
                            <picture>
                              <img src="images/whygetfit_1.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="why-getfit__content__list__item"
                      data-aos="fade-left"
                      data-aos-duration="900"
                    >
                      <Link>
                        <div className="why-getfit__content__list__item__wrapper">
                          <div className="why-getfit__content__list__item__icon">
                            <picture>
                              <img src="images/whygetfit_2.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="why-getfit__content__list__item"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      <Link>
                        <div className="why-getfit__content__list__item__wrapper">
                          <div className="why-getfit__content__list__item__icon">
                            <picture>
                              <img src="images/whygetfit_3.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="why-getfit__content__list__item"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <Link>
                        <div className="why-getfit__content__list__item__wrapper">
                          <div className="why-getfit__content__list__item__icon">
                            <picture>
                              <img src="images/whygetfit_4.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="why-getfit__content__list__item"
                      data-aos="fade-left"
                      data-aos-duration="1800"
                    >
                      <Link>
                        <div className="why-getfit__content__list__item__wrapper">
                          <div className="why-getfit__content__list__item__icon">
                            <picture>
                              <img src="images/whygetfit_5.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div
                      className="why-getfit__content__list__item"
                      data-aos="fade-left"
                      data-aos-duration="2100"
                    >
                      <Link>
                        <div className="why-getfit__content__list__item__wrapper">
                          <div className="why-getfit__content__list__item__icon">
                            <picture>
                              <img src="images/whygetfit_6.png" alt="" />
                            </picture>
                          </div>
                        </div>
                      </Link>
                    </div>
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
