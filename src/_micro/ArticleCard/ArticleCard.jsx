import React from "react";
import "./ArticleCard.css";

export default function ArticleCard({
  title = "Default Title",
  postdate = "12 - Jun - 97",
  image = "images/servicehighlight_bg.jpg",
  description = "Treatment Physiotherapy home visit Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo",
  like = 1221,
  comment = 312,
  onclick = () => {},
}) {
  return (
    <>
      <div
        onClick={onclick}
        className="article-card__content"
        data-aos="fade-right"
        data-aos-duration="300"
      >
        <div className="article-card__content__wrapper">
          <div className="article-card__content__img">
            <picture>
              <img src={image} alt="article details" />
            </picture>
          </div>
          <div className="article-card__content__detail">
            <div
              className="article-card__content__detail__author"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className="article-card__content__detail__author__logo">
                <picture>
                  <img
                    src="/images/latestarticle_logo.png"
                    alt="the author logo"
                  />
                </picture>
              </div>
              <div className="article-card__content__detail__author__date">
                <p>{postdate}</p>
              </div>
            </div>
            <div
              className="article-card__content__detail__text"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              <div className="article-card__content__detail__text__title">
                <h2>{title}</h2>
              </div>
              <div className="article-card__content__detail__text__desc">
                <p>{description}</p>
              </div>
            </div>
            <div
              className="article-card__content__detail__attribute"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="article-card__content__detail__attribute__like">
                <div className="article-card__content__detail__attribute__like__icon">
                  <picture>
                    <img
                      src="images/latestarticle_like.png"
                      alt="like article"
                    />
                  </picture>
                </div>
                <div className="article-card__content__detail__attribute__like__number">
                  <p>{like}</p>
                </div>
              </div>
              <div className="article-card__content__detail__attribute__comment">
                <p>{comment} Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
