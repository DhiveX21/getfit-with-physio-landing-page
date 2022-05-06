import React from "react";
import "./ContactBar.css";

export default function ContactBar() {
  return (
    <>
      <section
        className="contact-bar"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="container">
          <div className="contact-bar__wrapper">
            <div
              className="contact-bar__title"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <h2>Need To Contact Us?</h2>
            </div>
            <div className="contact-bar__content">
              <div className="contact-bar__content__wrapper">
                <div
                  className="contact-bar__content__card"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #E2E2E2 3.06%, rgba(0, 0, 0, 0) 98.22%),url('images/contactbar_bg.png')",
                  }}
                >
                  <div className="contact-bar__content__card__text">
                    <h2>Whatsapp : 0895619258715</h2>
                  </div>
                </div>
                <div className="contact-bar__content__list">
                  <div className="contact-bar__content__list__item">
                    <picture>
                      <img src="/images/contactbar_wa.png" alt="whatsapp" />
                    </picture>
                  </div>
                  <div className="contact-bar__content__list__item">
                    <picture>
                      <img src="/images/contactbar_phone.png" alt="telephone" />
                    </picture>
                  </div>
                  <div className="contact-bar__content__list__item">
                    <picture>
                      <img src="/images/contactbar_email.png" alt="email" />
                    </picture>
                  </div>
                  <div className="contact-bar__content__list__item">
                    <picture>
                      <img src="/images/contactbar_clinic.png" alt="clinic" />
                    </picture>
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
