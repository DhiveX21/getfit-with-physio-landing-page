import React from "react";
import "./ProductHighlight.css";
import useBreakpoints from "../../_helper/breakpoint";

export default function ProductHighlight({
  mainTitle = "Highlight",
  title = "Default Title",
  image = "images/servicehighlight_bg.jpg",
  description = "Treatment Physiotherapy home visit Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen boo",
  button = null,
}) {
  const mediaSize = useBreakpoints();
  return (
    <>
      <section
        className="product-highlight"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="" id="highlightContent">
          <div className="product-highlight__wrapper">
            <div
              className="product-highlight__title"
              data-aos="fade-right"
              data-aos-duration="300"
            >
              <h2>{mainTitle}</h2>
            </div>
            <div className="product-highlight__content">
              <div className="product-highlight__content__wrapper">
                <div className="product-highlight__content__card">
                  <div
                    className="product-highlight__content__card__wrapper"
                    style={{
                      backgroundImage: `${
                        mediaSize === "xs" || mediaSize === "sm"
                          ? "linear-gradient(360deg, rgba(244, 244, 244, 0.8) 100%, rgba(244, 244, 244, 0) 100%)"
                          : "linear-gradient(270deg, #E2E2E2 40%, rgba(244, 244, 244, 0) 70%)"
                      } ,url('${image}')`,
                    }}
                  >
                    {/* <div className="product-highlight__content__card__image"></div> */}
                    <div className="product-highlight__content__card__text">
                      <div className="product-highlight__content__card__text__title">
                        <h2>{title}</h2>
                      </div>
                      <div className="product-highlight__content__card__text__desc">
                        <p>{description}</p>
                      </div>

                      {button ? (
                        <div className="product-highlight__content__card__text__button">
                          <button onClick={button}>Beli Sekarang</button>
                        </div>
                      ) : (
                        ""
                      )}
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
