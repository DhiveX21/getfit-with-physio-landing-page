import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./OurServices.css";
import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <>
      <section
        className="our-services"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="our-services__wrapper container">
          <div
            className="our-services__title"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <h2>Layanan Kami</h2>
          </div>
          <div data-aos="fade-left" data-aos-duration="700">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => {}}
              onSwiper={(swiper) => {}}
              speed={1000}
            >
              <SwiperSlide>
                <div className="container">
                  <div className="our-services__swiper__item">
                    <div
                      className="our-services__swiper__item__wrapper"
                      style={{
                        backgroundImage: `url("/images/homevisit.jpg")`,
                      }}
                    >
                      <div className="our-services__swiper__item__content">
                        <div className="our-services__swiper__item__content__wrapper">
                          <div
                            className="our-services__swiper__item__content__title"
                            data-aos="fade-left"
                            data-aos-duration="1100"
                          >
                            <h2>Treatment Home Visit</h2>
                          </div>
                          <div
                            className="our-services__swiper__item__content__desc"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                          >
                            <p>
                              Kamu hanya perlu menunggu fisio datang ke rumahmu
                              pada waktu yang telah di sepakati.
                            </p>
                          </div>
                          <div
                            className="our-services__swiper__item__content__button"
                            data-aos="fade-left"
                            data-aos-duration="1700"
                          >
                            <a
                              href="https://api.whatsapp.com/send?phone=628122010859"
                              target="_blank"
                            >
                              <button
                                className="hover-inset-shadow"
                                type="button "
                              >
                                Lainnya
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container">
                  <div className="our-services__swiper__item">
                    <div
                      className="our-services__swiper__item__wrapper"
                      style={{
                        backgroundImage: `url("/images/servicelist_4.jpg")`,
                      }}
                    >
                      <div className="our-services__swiper__item__content">
                        <div className="our-services__swiper__item__content__wrapper">
                          <div className="our-services__swiper__item__content__title">
                            <h2>In Clinic</h2>
                          </div>
                          <div className="our-services__swiper__item__content__desc">
                            <p>
                              Treatment fisioterapi di klinik praktik, untuk
                              merasakan pengalaman fisioterapi yang maksimal...
                            </p>
                          </div>
                          <div className="our-services__swiper__item__content__button ">
                            <a
                              href="https://api.whatsapp.com/send?phone=628122010859"
                              target="_blank"
                            >
                              <button
                                className="hover-inset-shadow"
                                type="button "
                              >
                                Lainnya
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container">
                  <div className="our-services__swiper__item">
                    <div
                      className="our-services__swiper__item__wrapper"
                      style={{
                        backgroundImage: `url("/images/telekonsultasi.jpg")`,
                      }}
                    >
                      <div className="our-services__swiper__item__content">
                        <div className="our-services__swiper__item__content__wrapper">
                          <div className="our-services__swiper__item__content__title">
                            <h2>TeleFisio</h2>
                          </div>
                          <div className="our-services__swiper__item__content__desc">
                            <p>
                              Pemberian pelayanan kesehatan jarak jauh oleh
                              profesional kesehatan dengan menggunakan teknologi
                              informasi dan komunikasi, meliputi pertukaran
                              informasi diagnosis, pengobatan, pencegahan
                              penyakit dan cedera, penelitian dan evaluasi, dan
                              pendidikan berkelanjutan penyedia layanan
                              kesehatan untuk kepentingan peningkatan kesehatan
                              individu dan masyarakat.
                            </p>
                          </div>
                          <div className="our-services__swiper__item__content__button ">
                            <a
                              href="https://api.whatsapp.com/send?phone=628122010859"
                              target="_blank"
                            >
                              <button
                                className="hover-inset-shadow"
                                type="button "
                              >
                                Lainnya
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
