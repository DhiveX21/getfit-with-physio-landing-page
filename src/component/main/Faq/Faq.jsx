import React from "react";
import { Link } from "react-router-dom";
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
              <div class="accordion accordion-flush" id="accordionFaq">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOneFaq">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse-faq-1"
                      aria-expanded="false"
                      aria-controls="flush-collapse-faq-1"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </button>
                  </h2>
                  <div
                    id="flush-collapse-faq-1"
                    class="accordion-collapse collapse show"
                    aria-labelledby="flush-headingOneFaq"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when Lorem Ipsum
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-collapse-faq-2">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-collapse-faq-2"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when Lorem Ipsum
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-collapse-faq-3">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-collapse-faq-3"
                    data-bs-parent="#accordionFaq"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when Lorem Ipsum
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when
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
