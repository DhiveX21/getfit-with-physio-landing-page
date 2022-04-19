import React from "react";
import "./LatestNews.css";

export default function LatestNews() {
  return (
    <>
      <section
        className="latest-news"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="container">
          <div className="latest-news__wrapper ">
            <div
              className="latest-news__title"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <h2>Latest News</h2>
            </div>
            <div className="latest-news__content">
              <div
                className="latest-news__content__item"
                data-aos="fade-left"
                data-aos-duration="600"
                style={{
                  backgroundImage: `url("/images/latestnews_card1.jpg")`,
                }}
              >
                <div className="latest-news__content__item__card">
                  <div className="latest-news__content__item__card__title">
                    <h3>Muscle Release</h3>
                  </div>
                  <div className="latest-news__content__item__card__desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been Lorem Lorem Ipsum is simply dummy text of the
                    </p>
                  </div>
                  <div className="latest-news__content__item__card__button">
                    <button>See More</button>
                  </div>
                </div>
              </div>
              <div
                className="latest-news__content__item"
                data-aos="fade-left"
                data-aos-duration="900"
                style={{
                  backgroundImage: `url("/images/latestnews_card1.jpg")`,
                }}
              >
                <div className="latest-news__content__item__card">
                  <div className="latest-news__content__item__card__title">
                    <h3>Muscle Release</h3>
                  </div>
                  <div className="latest-news__content__item__card__desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been Lorem Lorem Ipsum is simply dummy text of the
                    </p>
                  </div>
                  <div className="latest-news__content__item__card__button">
                    <button>See More</button>
                  </div>
                </div>
              </div>
              <div
                className="latest-news__content__item"
                data-aos="fade-left"
                data-aos-duration="1200"
                style={{
                  backgroundImage: `url("/images/latestnews_card1.jpg")`,
                }}
              >
                <div className="latest-news__content__item__card">
                  <div className="latest-news__content__item__card__title">
                    <h3>Muscle Release</h3>
                  </div>
                  <div className="latest-news__content__item__card__desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been Lorem Lorem Ipsum is simply dummy text of the
                    </p>
                  </div>
                  <div className="latest-news__content__item__card__button">
                    <button>See More</button>
                  </div>
                </div>
              </div>
              <div
                className="latest-news__content__item"
                data-aos="fade-left"
                data-aos-duration="1500"
                style={{
                  backgroundImage: `url("/images/latestnews_card1.jpg")`,
                }}
              >
                <div className="latest-news__content__item__card">
                  <div className="latest-news__content__item__card__title">
                    <h3>Muscle Release</h3>
                  </div>
                  <div className="latest-news__content__item__card__desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been Lorem Lorem Ipsum is simply dummy text of the
                    </p>
                  </div>
                  <div className="latest-news__content__item__card__button">
                    <button>See More</button>
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
