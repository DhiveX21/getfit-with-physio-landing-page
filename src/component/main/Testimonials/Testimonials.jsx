import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useBreakpoints from "../../../_helper/breakpoint";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Testimonials.css";

export default function Testimonials() {
  const mediaSize = useBreakpoints();
  return (
    <>
      <section
        className="testimonials"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="container">
          <div className="testimonials__wrapper ">
            <div
              className="testimonials__title"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <h2>Testimonials</h2>
            </div>
            <div data-aos="fade-left" data-aos-duration="700">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={
                  mediaSize === "xs" || mediaSize === "sm"
                    ? 1
                    : mediaSize === "md"
                    ? 2
                    : 3
                }
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
                speed={1000}
              >
                <SwiperSlide>
                  <div className="container">
                    <div className="testimonials__swiper__item">
                      <div
                        className="testimonials__swiper__item__wrapper"
                        style={{
                          backgroundImage: `url("/images/ourservices_slide1.png")`,
                        }}
                      >
                        <div className="testimonials__swiper__item__content">
                          <div
                            className="testimonials__swiper__item__content__photo"
                            data-aos="fade-left"
                            data-aos-duration="1100"
                          >
                            <picture>
                              <img
                                src="/images/testimonials_1.jpg"
                                alt="person"
                              />
                            </picture>
                          </div>
                          <div
                            className="testimonials__swiper__item__content__desc"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <h3>
                              <span>&ldquo;</span>
                              Aku merasakan manfaat melakukan fisioterapi di
                              getfit, Fisio Rifa sangat membantu mengajarkan
                              stretching dan setelah selesai fisioterapi 3x aku
                              lanjut jaga postur dan lakukan stretching di
                              rumah, Allhamdulillah keluhan di pinggang dan kaki
                              berangsur membaik dan sekarang merasa lebih enak.
                              <span>&rdquo;</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="testimonials__swiper__item">
                      <div
                        className="testimonials__swiper__item__wrapper"
                        style={{
                          backgroundImage: `url("/images/ourservices_slide1.png")`,
                        }}
                      >
                        <div className="testimonials__swiper__item__content">
                          <div
                            className="testimonials__swiper__item__content__photo"
                            data-aos="fade-left"
                            data-aos-duration="1100"
                          >
                            <picture>
                              <img
                                src="/images/testimonials_3.jpg"
                                alt="person"
                              />
                            </picture>
                          </div>
                          <div
                            className="testimonials__swiper__item__content__desc"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <h3>
                              Treatmentnya memuaskan, Mba Rifa nya baik
                              komunikatif Mantap.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="testimonials__swiper__item">
                      <div
                        className="testimonials__swiper__item__wrapper"
                        style={{
                          backgroundImage: `url("/images/ourservices_slide1.png")`,
                        }}
                      >
                        <div className="testimonials__swiper__item__content">
                          <div
                            className="testimonials__swiper__item__content__photo"
                            data-aos="fade-left"
                            data-aos-duration="1100"
                          >
                            <picture>
                              <img
                                src="/images/testimonials_4.jpg"
                                alt="person"
                              />
                            </picture>
                          </div>
                          <div
                            className="testimonials__swiper__item__content__desc"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <h3>
                              Bermanfaat banget setelah treatment langsung
                              kerasa perbedaannya, Fisioterapisnya jg ramah dan
                              informatif. Jadinya kita tau aftercare yang harus
                              dilakukan juga.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container">
                    <div className="testimonials__swiper__item">
                      <div
                        className="testimonials__swiper__item__wrapper"
                        style={{
                          backgroundImage: `url("/images/ourservices_slide1.png")`,
                        }}
                      >
                        <div className="testimonials__swiper__item__content">
                          <div
                            className="testimonials__swiper__item__content__photo"
                            data-aos="fade-left"
                            data-aos-duration="1100"
                          >
                            <picture>
                              <img
                                src="/images/testimonials_5.jpg"
                                alt="person"
                              />
                            </picture>
                          </div>
                          <div
                            className="testimonials__swiper__item__content__desc"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <h3>
                              Pelayanannya sangat baik dan Physio Rifa sangat
                              informatif dalam memberikan informasi.
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
