import React from "react";
import Header from "../../component/main/Header/Header";
import Hero from "../../component/main/Hero/Hero";
import ContactBar from "../../component/main/ContactBar/ContactBar";
import Faq from "../../component/main/Faq/Faq";
import ListServiceDetail from "../../component/main/ListServiceDetail/ListServiceDetail";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <ListServiceDetail></ListServiceDetail>
      <Faq></Faq>
      <ContactBar></ContactBar>
    </>
  );
}
