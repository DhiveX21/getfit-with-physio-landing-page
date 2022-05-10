import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const dataEmployee = [
  {
    id: "1",
    talentName: "Dr.a",
    description: "description",
    photo: "/images/aboutus_physio2.jpeg",
  },
  {
    id: "2",
    talentName: "Dr.b",
    description: "description 1",
    photo: "/images/aboutus_physio1.jpg",
  },
  {
    id: "3",
    talentName: "Dr.c",
    description: "description 2",
    photo: "/images/ourtalented_3.png",
  },
  {
    id: "4",
    talentName: "Dr.d",
    description: "description 3",
    photo: "/images/ourtalented_4.png",
  },
  {
    id: "5",
    talentName: "Dr.e",
    description: "description 4",
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
            <h2>About Us</h2>
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
                  <button className="hover-inset-shadow">See More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
