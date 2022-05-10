import React from "react";
import "./Faq.css";

export default function Faq() {
  return (
    <>
      <section
        className="faq"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="container">
          <div className="faq__wrapper ">
            <div
              className="faq__title"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <h2>FAQ</h2>
            </div>
            <div className="faq__content">
              <div className="accordion accordion-flush" id="accordionFaq">
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <h2 className="accordion-header" id="flush-headingOneFaq">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse-faq-1"
                      aria-expanded="false"
                      aria-controls="flush-collapse-faq-1"
                    >
                      Bagaimana cara mendaftar sebagai pasien Getfit?
                    </button>
                  </h2>
                  <div
                    id="flush-collapse-faq-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOneFaq"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      Kamu cukup mendaftar dari website ini , atau kamu hanya
                      perlu hubungi admin sosial media kami...
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <h2 className="accordion-header" id="flush-collapse-faq-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Berapa lama sih treatment fisioterapi berlangsung?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-collapse-faq-2"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      Kamu perlu meluangkan waktu sekitar 30 - 60 menit untuk
                      mengikuti 1x treatment fisioterapi.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h2 className="accordion-header" id="flush-collapse-faq-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Apa saya bisa membuat appointment treatment di hari yang
                      sama?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-collapse-faq-3"
                    data-bs-parent="#accordionFaq"
                  >
                    <div className="accordion-body">
                      Untuk saat ini pembuatan appointment kamu harus setidak
                      nya minimal H-1 dari hari treatment.
                    </div>
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
