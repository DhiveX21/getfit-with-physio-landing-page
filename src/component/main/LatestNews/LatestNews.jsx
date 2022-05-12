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
              <h2>Berita Terbaru Kami</h2>
            </div>
            <div className="latest-news__content">
              <div
                className="latest-news__content__item"
                data-aos="fade-left"
                data-aos-duration="600"
                style={{
                  backgroundImage: `url("/images/latestnews_card2.jpg")`,
                }}
              >
                <div className="latest-news__content__item__card">
                  <div className="latest-news__content__item__card__title">
                    <h3>Seminar Kesehatan Wanita</h3>
                  </div>
                  <div className="latest-news__content__item__card__desc">
                    <p>
                      Seminar dengan topik pembahasan utama "Kesehatan Wanita",
                      Dimana Pembicaranya adalah Founder dari getfitwithphysio
                      yaitu kak "Faizah Abdullah, S.St.Ft., S.Ft., M.Biomed."
                      ayo ikut langsung catat tanggal nya...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="latest-news__content__item"
                data-aos="fade-left"
                data-aos-duration="900"
                style={{
                  backgroundImage: `url("/images/latestnews_card3.jpg")`,
                }}
              >
                <div className="latest-news__content__item__card">
                  <div className="latest-news__content__item__card__title">
                    <h3>Live Instagram</h3>
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
                </div>
              </div>
              <div
                className="latest-news__content__item"
                data-aos="fade-left"
                data-aos-duration="1200"
                style={{
                  backgroundImage: `url("/images/latestnews_card4.png")`,
                }}
              >
                <div className="latest-news__content__item__card">
                  <div className="latest-news__content__item__card__title">
                    <h3>Tata cara kunjungan ke klinik</h3>
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
                    <h3>Rekan baru kami...</h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
