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
import useBreakpoint from "../../../_helper/breakpoint";

const dataJson = [
  {
    title: "Klinik",
    subtitle: "Mitra kerja sama kami.",
    url: null,
    image: "/images/hero_1_new.jpg",
  },
  {
    title: "Peran Fisioterapi",
    subtitle: "Terhadap ibu hamil dengan Covid-19",
    url: null,
    image: "/images/hero_2_new.jpg",
  },
  {
    title: "GetfitWithPhysio",
    subtitle: "Mengucapkan...",
    url: null,
    image: "/images/hero_3_new.jpg",
  },
  {
    title: "Bentuk kaki",
    subtitle: "dari sisi penglihatan fisioterapi...",
    url: null,
    image: "/images/hero_4_new.jpg",
  },
];

const HandleSlide = ({ item, image }) => {
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
            <img src={image.replace("images/", "images/desktop_")} alt="" />
          </picture>
        </button>
      </div>
    </>
  );
};
export default function Hero() {
  const [trigger, settrigger] = useState(false);
  useEffect(() => {}, [trigger]);
  const mediaScreen = useBreakpoint();
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
                    backgroundImage: `url(${
                      mediaScreen === "xs" || mediaScreen === "sm"
                        ? item.image.replace("images/", "images/mobile_")
                        : item.image.replace("images/", "images/desktop_")
                    })`,
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
                  <HandleSlide
                    key={key}
                    item={key}
                    image={item.image}
                  ></HandleSlide>
                ))}
              </div>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
}
