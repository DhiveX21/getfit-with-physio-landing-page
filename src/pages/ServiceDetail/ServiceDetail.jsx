import React, { useEffect } from "react";
import Hero from "../../component/main/Hero/Hero";
import ContactBar from "../../component/main/ContactBar/ContactBar";
import Faq from "../../component/main/Faq/Faq";
import ListServiceDetail from "../../component/main/ListServiceDetail/ListServiceDetail";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Service Detail | GetfitWithPhysio";
  }, []);

  return (
    <>
      <Hero></Hero>
      <ListServiceDetail></ListServiceDetail>
      <Faq></Faq>
      <ContactBar></ContactBar>
    </>
  );
}
