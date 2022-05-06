import React from "react";
import { Link } from "react-router-dom";
import "./OurTalentedTeam.css";

export default function OurTalentedTeam() {
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
                        src="/images/ourtalented_5.png"
                        alt="selected talent team"
                      />
                    </picture>
                  </div>
                  <div className="our-talented-team__content__card__text">
                    <div className="our-talented-team__content__card__text__title">
                      <h2>Talent Name</h2>
                    </div>
                    <div className="our-talented-team__contetn__card__text__desc">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Maxime animi, modi, excepturi eligendi unde, neque
                        omnis repudiandae non ab commodi odit nisi accusamus?
                        Reiciendis, itaque eum laudantium quo repudiandae, sint
                        in vero perferendis sit id consequatur, maxime quod quas
                        corrupti eos explicabo deleniti repellendus culpa
                        commodi quibusdam! Eos, ea esse.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="our-talented-team__content__list">
                  <div className="our-talented-team__content__list__item">
                    <div className="our-talented-team__content__list__item__photo">
                      <picture>
                        <img src="/images/ourtalented_1.png" alt="team " />
                      </picture>
                    </div>
                  </div>
                  <div className="our-talented-team__content__list__item">
                    <div className="our-talented-team__content__list__item__photo">
                      <picture>
                        <img src="/images/ourtalented_2.png" alt="team " />
                      </picture>
                    </div>
                  </div>
                  <div className="our-talented-team__content__list__item">
                    <div className="our-talented-team__content__list__item__photo">
                      <picture>
                        <img src="/images/ourtalented_3.png" alt="team " />
                      </picture>
                    </div>
                  </div>
                  <div className="our-talented-team__content__list__item">
                    <div className="our-talented-team__content__list__item__photo">
                      <picture>
                        <img src="/images/ourtalented_4.png" alt="team " />
                      </picture>
                    </div>
                  </div>
                  <div className="our-talented-team__content__list__item">
                    <div className="our-talented-team__content__list__item__photo">
                      <picture>
                        <img src="/images/ourtalented_5.png" alt="team " />
                      </picture>
                    </div>
                  </div>
                  <div className="our-talented-team__content__list__item">
                    <div className="our-talented-team__content__list__item__photo">
                      <picture>
                        <img src="/images/ourtalented_6.png" alt="team " />
                      </picture>
                    </div>
                  </div>
                  <div className="our-talented-team__content__list__item">
                    <div className="our-talented-team__content__list__item__photo">
                      <picture>
                        <img src="/images/ourtalented_7.png" alt="team " />
                      </picture>
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
