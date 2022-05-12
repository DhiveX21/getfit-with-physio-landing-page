import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const dataEmployee = [
  {
    id: "1",
    talentName: "Faizah Abdullah, S.St.Ft., S.Ft., M.Biomed.",
    description:
      "Lecturer at University of Indonesia, Musculoskeletal Physiotherapy Womens Health Practitioner and Kemendikbudristek Lecturer Retooling Melbourne-Australia 2019",
    photo: "/images/aboutus_physio2.jpeg",
  },
  {
    id: "2",
    talentName: "Rifa Rahmalia, A.Md.Ft",
    description: "Physiotherapy Assistant Lecturer at University of Indonesia",
    photo: "/images/aboutus_physio1.jpg",
  },
  {
    id: "3",
    talentName: "Chairunnisa, S.Pd",
    description:
      "Most outstanding student of UPI 2019, Participant with Excellent Accomplishment in SEA-TEACHER PHILIPPINES 2019",
    photo: "/images/aboutus_physio3.jpg",
  },
  {
    id: "4",
    talentName: "Amalia SV, A.Md.Ft",
    description:
      "2nd best 2020 graduate And Physiotherapy from University of Indonesia",
    photo: "/images/aboutus_physio4.jpg",
  },
  {
    id: "5",
    talentName: "Rossa Nurhanifah, A.Md.Ft",
    description: "Social Media Specialist at Get Fit with Physio",
    photo: "/images/ourtalented_5.png",
  },
];

export default function AboutUs() {
  const [selectedItem, setSelectedItem] = useState(dataEmployee[0].id);
  return (
    <>
      <section
        className="about-us"
        style={{
          backgroundColor: "#E0E0E0",
          backgroundImage: `url("/images/aboutus_bg.png")`,
        }}
      >
        <div className="about-us__wrapper container">
          <div
            className="about-us__title"
            data-aos="fade-left"
            data-aos-duration="300"
          >
            <h2>Tentang kami</h2>
          </div>
          <div className="about-us__content">
            <div
              className="about-us__content__thumbnail"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              <picture>
                <img
                  src={
                    dataEmployee.find((item) => item.id === selectedItem).photo
                  }
                  alt="team of physiotherapy"
                />
              </picture>
            </div>
            <div
              className="about-us__content__list"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="about-us__content__list__wrapper">
                {dataEmployee.map((item, index) => (
                  <button
                    key={index}
                    className="about-us__content__list__item "
                    onClick={() => setSelectedItem(item.id)}
                  >
                    <picture>
                      <img src={item.photo} alt="physiotherapist" />
                    </picture>
                  </button>
                ))}
              </div>
            </div>
            <div
              className="about-us__content__detail"
              data-aos="fade-left"
              data-aos-duration="1300"
            >
              <div className="about-us__content__detail__title">
                <h3>
                  {" "}
                  {
                    dataEmployee.find((item) => item.id === selectedItem)
                      .talentName
                  }
                </h3>
              </div>
              <div className="about-us__content__detail__desc">
                <p>
                  {
                    dataEmployee.find((item) => item.id === selectedItem)
                      .description
                  }
                </p>
              </div>
              <div className="about-us__content__detail__button">
                <Link to="about_us">
                  <button className="hover-inset-shadow">Lainnya</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
