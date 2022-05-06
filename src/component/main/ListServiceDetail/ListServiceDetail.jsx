import React, { useState, useRef } from "react";
import CardFullImageTitle from "../../../_micro/CardFullImageTitle/CardFullImageTitle";
import ProductHighlight from "../../../_micro/ProductHighlight/ProductHighlight";

import "./ListServiceDetail.css";

const dataService = [
  {
    serviceId: "1",
    serviceName: "Penanganan Ibu Hamil",
    desc: "Penanganan Ibu Hamil dari usia 2 sampai 9 bulan , agar Ibu dan Calon buah hati selalu terjaga kesehatan dan kebugaran nya , berfokus untuk kenyamanan ibu hamil agar hamil terasa santai dan menyenangkan. :)",
    image: "/images/servicelist_1.jpeg",
  },
  {
    serviceId: "2",
    serviceName: "Penanganan Atlit",
    desc: "Penanganan Atlit Kebugaran",
    image: "/images/latestarticle_img.jpg",
  },
  {
    serviceId: "3",
    serviceName: "Fisio Paket 3x Appointment",
    desc: "PPaket Fisio dengan 3x pertemeuan",
    image: "/images/servicelist_1.jpeg",
  },
  {
    serviceId: "4",
    serviceName: "Fisio Paket 3x Appointment",
    desc: "PPaket Fisio dengan 3x pertemeuan",
    image: "/images/servicehighlight_bg.jpg",
  },
  {
    serviceId: "5",
    serviceName: "Fisio Paket 3x Appointment",
    desc: "PPaket Fisio dengan 3x pertemeuan",
    image: "/images/ourservices_slide1.png",
  },
  {
    serviceId: "6",
    serviceName: "Fisio Paket 3x Appointment",
    desc: "PPaket Fisio dengan 3x pertemeuan",
    image: "/images/servicelist_1.jpeg",
  },
  {
    serviceId: "7",
    serviceName: "Fisio Paket 3x Appointment",
    desc: "PPaket Fisio dengan 3x pertemeuan",
    image: "/images/servicelist_1.jpeg",
  },
];

export default function ListServiceDetail() {
  const [activeHighlight, setActiveHighlight] = useState("1");
  const highlightRef = useRef(null);
  const executeScroll = () =>
    document.querySelector("#highlightContent").scrollIntoView();
  return (
    <>
      <section
        className="our-services"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div ref={highlightRef}>
          <ProductHighlight
            mainTitle="Service Highlight"
            title={
              dataService.find((item) => item.serviceId === activeHighlight)
                .serviceName
            }
            description={
              dataService.find((item) => item.serviceId === activeHighlight)
                .desc
            }
            image={
              dataService.find((item) => item.serviceId === activeHighlight)
                .image
            }
          />
        </div>
        <div className="d-flex  container extra-container">
          {dataService.map((item, key) => (
            <CardFullImageTitle
              key={key}
              rowsGap="5vw"
              title={item.serviceName}
              image={item.image}
              button={() => {
                setActiveHighlight(item.serviceId);
                executeScroll();
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
