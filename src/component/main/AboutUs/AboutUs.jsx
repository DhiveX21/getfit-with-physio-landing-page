import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <section
        className="about-us"
        style={{
          backgroundColor: "#E0E0E0",
          backgroundImage: `url("/images/aboutus_bg.png")`,
        }}
      >
        <div className="about-us__wrapper container">
          <div
            className="about-us__title"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <h2>About Us</h2>
          </div>
          <div className="about-us__content">
            <div
              className="about-us__content__thumbnail"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <picture>
                <img
                  src="/images/aboutus_team.jpg"
                  alt="team of physiotherapy"
                />
              </picture>
            </div>
            <div
              className="about-us__content__list"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="about-us__content__list__wrapper">
                <div className="about-us__content__list__item">
                  <picture>
                    <img
                      src="/images/aboutus_physio1.png"
                      alt="physiotherapist"
                    />
                  </picture>
                </div>
                <div className="about-us__content__list__item">
                  <picture>
                    <img
                      src="/images/aboutus_physio2.png"
                      alt="physiotherapist"
                    />
                  </picture>
                </div>
                <div className="about-us__content__list__item">
                  <picture>
                    <img
                      src="/images/aboutus_physio3.png"
                      alt="physiotherapist"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div
              className="about-us__content__detail"
              data-aos="fade-left"
              data-aos-duration="1300"
            >
              <div className="about-us__content__detail__title">
                <h3>Introduction</h3>
              </div>
              <div className="about-us__content__detail__desc">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been Lorem
                </p>
              </div>
              <div className="about-us__content__detail__button">
                <button>See More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
