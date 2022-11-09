import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WhyGetfit.css";
import { Popper } from "@mui/material";

const jsonData = [
  {
    icon: "images/whygetfit_1.png",
    description: "Banyak promo menarik!!",
  },
  {
    icon: "images/whygetfit_2.png",
    description: "Banyak promo menarik!!",
  },
  {
    icon: "images/whygetfit_3.png",
    description: "Banyak promo menarik!!",
  },
  {
    icon: "images/whygetfit_4.png",
    description: "Banyak promo menarik!!",
  },
  {
    icon: "images/whygetfit_5.png",
    description: "Banyak promo menarik!!",
  },
  {
    icon: "images/whygetfit_6.png",
    description: "Banyak promo menarik!!",
  },
];

export default function WhyGetfit() {
  const [popperText, setPopperText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <section
        className="why-getfit"
        style={{
          backgroundColor: "#E0E0E0",
          backgroundImage: "url('images/whygetfit_bg.png')",
        }}
      >
        <div className="container">
          <div className="why-getfit__wrapper">
            <div
              className="why-getfit__title"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <h2>Kenapa harus Getfit?</h2>
            </div>
            <div className="why-getfit__content">
              <div className="why-getfit__content__wrapper">
                <div
                  className="why-getfit__content__img"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <picture>
                    <img
                      src="images/whygetfit_cs.png"
                      alt="customer services"
                    />
                  </picture>
                </div>
                <div className="why-getfit__content__list">
                  <div className="why-getfit__content__list__wrapper">
                    {jsonData.map((item, key) => (
                      <div
                        className="why-getfit__content__list__item"
                        data-aos="fade-left"
                        data-aos-duration="600"
                        key={key}
                      >
                        <Link to="/">
                          <div
                            className="why-getfit__content__list__item__wrapper"
                            onMouseEnter={(event) => {
                              setAnchorEl(
                                anchorEl ? null : event.currentTarget
                              );
                            }}
                            onMouseLeave={(event) => {
                              setAnchorEl(
                                anchorEl ? null : event.currentTarget
                              );
                              setPopperText(item.description);
                            }}
                          >
                            <div className="why-getfit__content__list__item__icon">
                              <picture>
                                <img src={item.icon} alt="why getfit" />
                              </picture>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}

                    <Popper
                      id={open ? "simple-popper" : undefined}
                      open={open}
                      anchorEl={anchorEl}
                      // innerRef={(node) => (this.popperNode = node)}
                      placement="left"
                      modifiers={[{ name: "preventOverflow", enabled: false }]}
                    >
                      <div
                        style={{
                          backgroundcolor: "#333",
                          color: "white",
                          backgroundColor: "black",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          fontsize: "13px",
                          marginRight: "10px",
                          maxWidth: "400px",
                        }}
                      >
                        {popperText}
                      </div>
                    </Popper>
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
