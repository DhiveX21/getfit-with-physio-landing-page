import React, { useEffect, useState } from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Hero.css";

const dataJson = [
  {
    title: "Responsibility",
    subtitle: "Physiotherapy and with their responsibility",
    url: null,
  },
  {
    title: "Responsibility",
    subtitle: "Physiotherapy and with their responsibility",
    url: null,
  },
  {
    title: "Responsibility",
    subtitle: "Physiotherapy and with their responsibility",
    url: null,
  },
  {
    title: "Responsibility",
    subtitle: "Physiotherapy and with their responsibility",
    url: null,
  },
];

const HandleSlide = ({ item }) => {
  const swiper = useSwiper();
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div
        className={`swiper-thumbnail__item item-${item} ${
          swiper.activeIndex === item ? "active" : ""
        }`}
      >
        <button
          onClick={() => {
            swiper.slideTo(item);
          }}
        >
          <picture>
            <img src="/images/hero1.png" alt="" />
          </picture>
        </button>
      </div>
    </>
  );
};
export default function Hero() {
  const [trigger, settrigger] = useState(false);
  useEffect(() => {}, [trigger]);
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
          onSlideChange={(swiper) => settrigger(!trigger)}
          onSwiper={(swiper) => {}}
          speed={1000}
          loop={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {dataJson.map((item, key) => (
            <SwiperSlide key={key}>
              <div className="hero__swiper__item">
                <div
                  className="hero__swiper__item__wrapper"
                  style={{
                    backgroundImage: `url("/images/hero1.png")`,
                  }}
                >
                  <div className="hero__swiper__item__content">
                    <div className="hero__swiper__item__content__title">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="hero__swiper__item__content__subtitle">
                      <h3>{item.subtitle}</h3>
                    </div>
                    {item.url ? (
                      <div className="hero__swiper__item__content__button">
                        <button type="button">See More</button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="container">
            <div className="swiper-thumbnail">
              <div className="swiper-thumbnail__wrapper">
                {dataJson.map((item, key) => (
                  <HandleSlide key={key} item={key}></HandleSlide>
                ))}
              </div>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
}
