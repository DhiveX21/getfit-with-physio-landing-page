import React, { useState, useRef } from "react";
import CardFullImageTitle from "../../../_micro/CardFullImageTitle/CardFullImageTitle";
import ProductHighlight from "../../../_micro/ProductHighlight/ProductHighlight";

import "./ListServiceDetail.css";

const dataService = [
  {
    serviceId: "1",
    serviceName: "Home Visit",
    desc: "Kamu hanya perlu menunggu fisio datang ke rumahmu pada waktu yang telah di sepakati.",
    image: "/images/homevisit.jpg",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Home%20Visit%20ini,%20Bolehkah%20saya%20meminta%20Detailnya.",
  },
  {
    serviceId: "2",
    serviceName: "Kunjungan Klinik",
    desc: "Treatment fisioterapi di klinik praktik, untuk merasakan pengalaman fisioterapi yang maksimal...",
    image: "/images/servicelist_4.jpg",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Kunjungan%20Klinik%20ini,%20Bolehkah%20saya%20meminta%20Detailnya.",
  },
  {
    serviceId: "3",
    serviceName: "TeleFisio",
    desc: "Pemberian pelayanan kesehatan jarak jauh oleh profesional kesehatan dengan menggunakan teknologi informasi dan komunikasi, meliputi pertukaran informasi diagnosis, pengobatan, pencegahan penyakit dan cedera, penelitian dan evaluasi, dan pendidikan berkelanjutan penyedia layanan kesehatan untuk kepentingan peningkatan kesehatan individu dan masyarakat.",
    image: "/images/telekonsultasi.jpg",
    url: "https://api.whatsapp.com/send?phone=628122010859&text=Saya%20tertarik%20untuk%20membeli%20produk%20Tele%20Fisio%20ini,%20Bolehkah%20saya%20meminta%20Detailnya.",
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
            button={() => {
              window.open(
                dataService.find((item) => item.serviceId === activeHighlight)
                  .url,
                "_blank"
              );
            }}
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
