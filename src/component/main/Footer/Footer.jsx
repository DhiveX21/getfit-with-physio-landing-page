import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="footer">
          <div className="footer__desktop">
            <div className="footer__desktop__wrapper">
              <div className="footer__desktop__map">
                <iframe
                  title="footer"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15866.304754248145!2d106.8327312!3d-6.1874272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7250225273d7d32b!2sSAMASTA%20INTEGRATED%20MEDICAL%20CENTER!5e0!3m2!1sid!2sid!4v1651912425781!5m2!1sid!2sid"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="footer__desktop__content">
                <div className="footer__desktop__content__contact">
                  <div className="footer__desktop__content__contact__title">
                    <h2>Contact Person 1</h2>
                  </div>
                  <div className="footer__desktop__content__contact__desc">
                    <p>0895619258715</p>
                  </div>
                </div>
                <div className="footer__desktop__content__address">
                  <div className="footer__desktop__content__address__title">
                    <h2>Address</h2>
                  </div>
                  <div className="footer__desktop__content__address__desc">
                    <p>
                      Jl. Johar No.1A, RT.5/RW.3, Gondangdia, Kec. Menteng, Kota
                      Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
                    </p>
                  </div>
                </div>
                <div className="footer__desktop__content__social">
                  <div className="footer__desktop__content__social__title">
                    <h2>social</h2>
                  </div>
                  <div className="footer__desktop__content__social__wrapper">
                    <div className="footer__desktop__content__social__item">
                      <picture>
                        <img src="/images/youtube.png" alt="youtube" />
                      </picture>
                    </div>
                    <div className="footer__desktop__content__social__item">
                      <picture>
                        <img src="/images/tiktok.png" alt="tiktok" />
                      </picture>
                    </div>
                    <div className="footer__desktop__content__social__item">
                      <picture>
                        <img src="/images/twitter.png" alt="twitter" />
                      </picture>
                    </div>
                    <div className="footer__desktop__content__social__item">
                      <picture>
                        <img src="/images/facebook.png" alt="facebook" />
                      </picture>
                    </div>
                    <div className="footer__desktop__content__social__item">
                      <picture>
                        <img src="/images/instagram.png" alt="instagram" />
                      </picture>
                    </div>
                    <div className="footer__desktop__content__social__item">
                      <picture>
                        <img src="/images/telegram.png" alt="telegram" />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer__desktop__copyright">
                <div className="footer__desktop__copyright__wrapper">
                  <div className="footer__desktop__copyright__text">
                    <h2>Copyright @ GetfitWithPhysio 2022</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
