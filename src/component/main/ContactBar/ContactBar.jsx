import React, { useState } from "react";
import "./ContactBar.css";

const dataContact = [
  {
    id: "1",
    platform: "whatsapp",
    value: "Whatsapp : 0812-2010-859",
    icon: "/images/contactbar_wa.png",
  },
  {
    id: "2",
    platform: "telephone",
    value: "Telephone : 0812-2010-859",
    icon: "/images/contactbar_phone.png",
  },
  {
    id: "3",
    platform: "email",
    value: "Email : gfwp.indonesia@gmail.com",
    icon: "/images/contactbar_email.png",
  },
  {
    id: "4",
    platform: "clinic",
    value: "Klinik Samasta : 0811-8035-135",
    icon: "/images/contactbar_clinic.png",
  },
];

export default function ContactBar() {
  const [selectedItem, setSelectedItem] = useState(dataContact[0].id);
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
                    <h2>
                      {
                        dataContact.find((item) => item.id === selectedItem)
                          .value
                      }
                    </h2>
                  </div>
                </div>
                <div className="contact-bar__content__list">
                  {dataContact.map((item) => (
                    <div className="contact-bar__content__list__item">
                      <button onClick={() => setSelectedItem(item.id)}>
                        <picture>
                          <img src={item.icon} alt={item.platform} />
                        </picture>
                      </button>
                    </div>
                  ))}
                  {/* <div className="contact-bar__content__list__item">
                    <button>
                      <picture>
                        <img src="/images/contactbar_wa.png" alt="whatsapp" />
                      </picture>
                    </button>
                  </div>
                  <div className="contact-bar__content__list__item">
                    <button>
                      <picture>
                        <img
                          src="/images/contactbar_phone.png"
                          alt="telephone"
                        />
                      </picture>
                    </button>
                  </div>
                  <div className="contact-bar__content__list__item">
                    <button>
                      <picture>
                        <img src="/images/contactbar_email.png" alt="email" />
                      </picture>
                    </button>
                  </div>
                  <div className="contact-bar__content__list__item">
                    <button>
                      <picture>
                        <img src="/images/contactbar_clinic.png" alt="clinic" />
                      </picture>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
