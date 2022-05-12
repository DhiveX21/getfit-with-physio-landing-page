import React, { useState } from "react";
import "./OurTalentedTeam.css";

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

export default function OurTalentedTeam() {
  const [selectedItem, setSelectedItem] = useState(dataEmployee[0].id);
  return (
    <>
      <section
        className="our-talented-team"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="container">
          <div className="our-talented-team__wrapper ">
            <div
              className="our-talented-team__title"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <h2>Our Talented Teams</h2>
            </div>
            <div className="our-talented-team__content">
              <div className="our-talented-team__content__wrapper">
                <div className="our-talented-team__content__card">
                  <div className="our-talented-team__content__card__image">
                    <picture>
                      <img
                        src={
                          dataEmployee.find((item) => item.id === selectedItem)
                            .photo
                        }
                        alt="selected talent team"
                      />
                    </picture>
                  </div>
                  <div className="our-talented-team__content__card__text">
                    <div className="our-talented-team__content__card__text__title">
                      <h2>
                        {
                          dataEmployee.find((item) => item.id === selectedItem)
                            .talentName
                        }
                      </h2>
                    </div>
                    <div className="our-talented-team__content__card__text__desc">
                      <p>
                        {
                          dataEmployee.find((item) => item.id === selectedItem)
                            .description
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="our-talented-team__content__list">
                  {dataEmployee.map((item, index) => (
                    <button
                      className="our-talented-team__content__list__item"
                      key={index}
                      onClick={() => setSelectedItem(item.id)}
                    >
                      <div className="our-talented-team__content__list__item__photo">
                        <picture>
                          <img src={item.photo} alt="team" />
                        </picture>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
