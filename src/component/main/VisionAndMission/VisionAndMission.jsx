import React from "react";
import "./VisionAndMission.css";

export default function OurClients() {
  return (
    <>
      <section
        className="vision-and-mission"
        style={{
          backgroundColor: "#E0E0E0",
          backgroundImage: "url('images/ourclients_bg.png')",
        }}
      >
        <div className="container">
          <div className="vision-and-mission__wrapper">
            <div
              className="vision-and-mission__title"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <h2>Our Vision & Mission</h2>
            </div>
            <div className="vision-and-mission__content">
              <div className="vision-and-mission__content__wrapper">
                <div className="vision-and-mission__content__text">
                  <div className="vision-and-mission__content__text__title">
                    <h3>Vision</h3>
                  </div>
                  <div className="vision-and-mission__content__text__desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took
                    </p>
                  </div>
                  {/* <div className="vision-and-mission__content__text__icon">
                    <div className="vision-and-mission__content__text__icon__wrapper">
                      <div className="vision-and-mission__content__text__icon__item">
                        <picture>
                          <img
                            src="/images/whygetfit_bg.png"
                            alt="vision and mission"
                          />
                        </picture>
                      </div>
                      <div className="vision-and-mission__content__text__icon__item">
                        <picture>
                          <img
                            src="/images/whygetfit_bg.png"
                            alt="vision and mission"
                          />
                        </picture>
                      </div>
                      <div className="vision-and-mission__content__text__icon__item">
                        <picture>
                          <img
                            src="/images/whygetfit_bg.png"
                            alt="vision and mission"
                          />
                        </picture>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="vision-and-mission__content__image">
                  <picture>
                    <img
                      src="/images/visionandmission_img.png"
                      alt="vision and mission"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="vision-and-mission__content">
              <div className="vision-and-mission__content__wrapper">
                <div className="vision-and-mission__content__image">
                  <picture>
                    <img
                      src="/images/visionandmission_img_1.png"
                      alt="vision and mission"
                    />
                  </picture>
                </div>
                <div className="vision-and-mission__content__text">
                  <div className="vision-and-mission__content__text__title">
                    <h3>Vision</h3>
                  </div>
                  <div className="vision-and-mission__content__text__desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took
                    </p>
                  </div>
                  {/* <div className="vision-and-mission__content__text__icon">
                    <div className="vision-and-mission__content__text__icon__wrapper">
                      <div className="vision-and-mission__content__text__icon__item">
                        <picture>
                          <img
                            src="/images/whygetfit_bg.png"
                            alt="vision and mission"
                          />
                        </picture>
                      </div>
                      <div className="vision-and-mission__content__text__icon__item">
                        <picture>
                          <img
                            src="/images/whygetfit_bg.png"
                            alt="vision and mission"
                          />
                        </picture>
                      </div>
                      <div className="vision-and-mission__content__text__icon__item">
                        <picture>
                          <img
                            src="/images/whygetfit_bg.png"
                            alt="vision and mission"
                          />
                        </picture>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
