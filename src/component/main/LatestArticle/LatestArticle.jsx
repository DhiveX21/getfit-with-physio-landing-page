import React from "react";
import { Link } from "react-router-dom";
import "./LatestArticle.css";

export default function LatestArticle() {
  return (
    <>
      <section
        className="latest-article"
        style={{
          backgroundColor: "#E0E0E0",
          backgroundImage: "url('images/ourclients_bg.png')",
        }}
      >
        <div className="latest-article__wrapper">
          <div
            className="latest-article__title"
            data-aos="fade-right"
            data-aos-duration="300"
          >
            <h2>Latest Article</h2>
          </div>

          <div
            className="latest-article__content"
            data-aos="fade-right"
            data-aos-duration="300"
          >
            <Link to="/article">
              <div className="latest-article__content__wrapper">
                <div className="latest-article__content__img">
                  <picture>
                    <img
                      src="/images/latestarticle_img.jpg"
                      alt="article details"
                    />
                  </picture>
                </div>
                <div className="latest-article__content__detail">
                  <div
                    className="latest-article__content__detail__author"
                    data-aos="fade-right"
                    data-aos-duration="600"
                  >
                    <div className="latest-article__content__detail__author__logo">
                      <picture>
                        <img
                          src="/images/latestarticle_logo.png"
                          alt="the author logo"
                        />
                      </picture>
                    </div>
                    <div className="latest-article__content__detail__author__date">
                      <p>21 - 03 - 2022</p>
                    </div>
                  </div>
                  <div
                    className="latest-article__content__detail__text"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    <div className="latest-article__content__detail__text__title">
                      <h2>Posture Improvements</h2>
                    </div>
                    <div className="latest-article__content__detail__text__desc">
                      <p>
                        posture improvisation can make a lot of difference to
                        our appearance, not only appearance, health is also
                        affected...
                      </p>
                    </div>
                  </div>
                  <div
                    className="latest-article__content__detail__attribute"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <div className="latest-article__content__detail__attribute__like">
                      <div className="latest-article__content__detail__attribute__like__icon">
                        <picture>
                          <img
                            src="images/latestarticle_like.png"
                            alt="like article"
                          />
                        </picture>
                      </div>
                      <div className="latest-article__content__detail__attribute__like__number">
                        <p>123</p>
                      </div>
                    </div>
                    <div className="latest-article__content__detail__attribute__comment">
                      <p>24 Comments</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
