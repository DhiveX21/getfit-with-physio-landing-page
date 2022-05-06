import React, { useState, useRef } from "react";
import CardFullHalfImage from "../../../_micro/CardFullHalfImage/CardFullHalfImage";
import ProductHighlight from "../../../_micro/ProductHighlight/ProductHighlight";

import "./ListEventsAndWebinarsDetail.css";

const dataService = [
  {
    event_id: "1",
    event_name: "Penanganan Ibu Hamil",
    event_desc:
      "Penanganan Ibu Hamil dari usia 2 sampai 9 bulan , agar Ibu dan Calon buah hati selalu terjaga kesehatan dan kebugaran nya , berfokus untuk kenyamanan ibu hamil agar hamil terasa santai dan menyenangkan. :)",
    image: "/images/servicelist_1.jpeg",
    event_date: "12-Jun-2022",
    speaker: "Faizah Abdullah, S.St.Ft., S.Ft., M.Biomed.",
  },
  {
    event_id: "2",
    event_name: "Treatment pasien Auto Immunne",
    event_desc:
      "penanganan pasien dengan auto immunne pastilah memerlukan keahlian khusus , selain sifat autoimmune itu sendiri sudah sangat unik kasus seperti ini juga sangat jarang di temukan",
    image: "/images/autoimmune.jpg",
    event_date: "12-Jun-2022",
    speaker: "Faizah Abdullah, S.St.Ft., S.Ft., M.Biomed.",
  },
];

export default function ListEventsAndWebinarsDetail() {
  const [activeHighlight, setActiveHighlight] = useState("1");
  const highlightRef = useRef(null);
  const executeScroll = () => {
    const highlightWidget = document.querySelector("#highlightContent");
    highlightWidget.scrollIntoView();
  };
  return (
    <>
      <section
        className="list-events-and-webinars-detail"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div ref={highlightRef}>
          <ProductHighlight
            mainTitle="Event Highlight"
            title={
              dataService.find((item) => item.event_id === activeHighlight)
                .event_name
            }
            description={
              dataService.find((item) => item.event_id === activeHighlight)
                .event_desc
            }
            image={
              dataService.find((item) => item.event_id === activeHighlight)
                .image
            }
            button={() => console.log("awkodawkod")}
          />
        </div>
        <div className="d-flex  container extra-container">
          {dataService.map((item, key) => (
            <CardFullHalfImage
              key={key}
              cardPadding="70px"
              rowsGap="5vw"
              title={item.event_name}
              image={item.image}
              desc={item.event_date}
              button={() => {
                setActiveHighlight(item.event_id);
                executeScroll();
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
