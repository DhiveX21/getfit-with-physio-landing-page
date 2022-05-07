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
              <h2>Our Services</h2>
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
                                src="/images/testimonials_1.png"
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
                              Lorem Ipsum is simply dummy text of the printing
                              and Lorem Ipsum is simply dummy text of the
                              printing and Lorem Ipsum is simply dummy text of
                              the printing and
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
                                src="/images/testimonials_1.png"
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
                              Lorem Ipsum is simply dummy text of the printing
                              and Lorem Ipsum is simply dummy text of the
                              printing and Lorem Ipsum is simply dummy text of
                              the printing and
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
                                src="/images/testimonials_1.png"
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
                              Lorem Ipsum is simply dummy text of the printing
                              and Lorem Ipsum is simply dummy text of the
                              printing and Lorem Ipsum is simply dummy text of
                              the printing and
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
                                src="/images/testimonials_1.png"
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
                              Lorem Ipsum is simply dummy text of the printing
                              and Lorem Ipsum is simply dummy text of the
                              printing and Lorem Ipsum is simply dummy text of
                              the printing and
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
                                src="/images/testimonials_1.png"
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
                              Lorem Ipsum is simply dummy text of the printing
                              and Lorem Ipsum is simply dummy text of the
                              printing and Lorem Ipsum is simply dummy text of
                              the printing and
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
                                src="/images/testimonials_1.png"
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
                              Lorem Ipsum is simply dummy text of the printing
                              and Lorem Ipsum is simply dummy text of the
                              printing and Lorem Ipsum is simply dummy text of
                              the printing and
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
