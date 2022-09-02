import React, { useEffect } from "react";
import "./ThankyouPage.css";
import { useHistory } from "react-router-dom";

export default function ThankyouPage() {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section
        className="thankyou-page"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="thankyou-page__wrapper">
          <div className="thankyou-page__img">
            <picture>
              <img src="/images/email-sent.gif" alt="email sent" />
            </picture>
          </div>
          <div className="thankyou-page__title">
            <h2>Terima kasih</h2>
          </div>
          <div className="thankyou-page__desc">
            <p>Form kamu telah terkirim.</p>
          </div>
          <div className="thankyou-page__button">
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Homepage
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
