import React from "react";
import ArticleCard from "../../../_micro/ArticleCard/ArticleCard";

import "./ListArticle.css";

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

export default function ListArticle() {
  return (
    <>
      <section
        className="our-services"
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <div className="d-flex gap-5 flex-column">
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
          <ArticleCard></ArticleCard>
        </div>
      </section>
    </>
  );
}
