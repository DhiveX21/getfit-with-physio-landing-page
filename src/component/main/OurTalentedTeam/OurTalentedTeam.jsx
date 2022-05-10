import React, { useState } from "react";
import "./OurTalentedTeam.css";

const dataEmployee = [
  {
    id: "1",
    talentName: "Rifa Rahmalia",
    description: "Rifa rahmalia desc",
    photo: "/images/ourtalented_1.png",
  },
  {
    id: "2",
    talentName: "Rifa rahmalia 1",
    description: "Rifa rahmalia desc 1",
    photo: "/images/ourtalented_2.png",
  },
  {
    id: "3",
    talentName: "Rifa Rahmalia 2",
    description: "Rifa rahmalia desc 2",
    photo: "/images/ourtalented_3.png",
  },
  {
    id: "4",
    talentName: "Rifa Rahmalia 2",
    description: "Rifa rahmalia desc 2",
    photo: "/images/ourtalented_4.png",
  },
  {
    id: "5",
    talentName: "Rifa Rahmalia 2",
    description: "Rifa rahmalia desc 2",
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
