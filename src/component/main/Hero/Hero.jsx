import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          speed={1000}
          loop={true}
        >
          <SwiperSlide>
            <div className="hero__swiper__item">
              <div
                className="hero__swiper__item__wrapper"
                style={{
                  backgroundImage: `url("/images/hero1.png")`,
                }}
              >
                <div className="hero__swiper__item__content">
                  <div className="hero__swiper__item__content__title">
                    <h2>Responsibility</h2>
                  </div>
                  <div className="hero__swiper__item__content__subtitle">
                    <h3>Physiotherapy and with their Responsibility</h3>
                  </div>
                  <div className="hero__swiper__item__content__button">
                    <button type="button">See More</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__swiper__item">
              <div
                className="hero__swiper__item__wrapper"
                style={{
                  backgroundImage: `url("/images/hero1.png")`,
                }}
              >
                <div className="hero__swiper__item__content">
                  <div className="hero__swiper__item__content__title">
                    <h2>Responsibility</h2>
                  </div>
                  <div className="hero__swiper__item__content__subtitle">
                    <h3>Physiotherapy and with their Responsibility</h3>
                  </div>
                  <div className="hero__swiper__item__content__button">
                    <button type="button">See More</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero__swiper__item">
              <div
                className="hero__swiper__item__wrapper"
                style={{
                  backgroundImage: `url("/images/hero1.png")`,
                }}
              >
                <div className="hero__swiper__item__content">
                  <div className="hero__swiper__item__content__title">
                    <h2>Responsibility</h2>
                  </div>
                  <div className="hero__swiper__item__content__subtitle">
                    <h3>Physiotherapy and with their Responsibility</h3>
                  </div>
                  <div className="hero__swiper__item__content__button">
                    <button type="button">See More</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
