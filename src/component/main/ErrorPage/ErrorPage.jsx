import React, { useEffect } from "react";
import "./ErrorPage.css";

export default function ErrorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section
        className="error-page"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div
          className="error-page__wrapper"
          style={{ backgroundImage: "url(/images/errorpage_bg.png)" }}
        >
          <div className="error-page__title">
            <h2>404</h2>
          </div>
          <div className="error-page__desc">
            <p>Ups! Halaman yang kamu cari sedang dalam perbaikan...</p>
          </div>
        </div>
      </section>
    </>
  );
}
