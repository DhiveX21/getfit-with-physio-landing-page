import React from "react";
import Header from "../../component/main/Header/Header";
import Hero from "../../component/main/Hero/Hero";
import ContactBar from "../../component/main/ContactBar/ContactBar";
import Faq from "../../component/main/Faq/Faq";
import ListEventsAndWebinarsDetail from "../../component/main/ListEventsAndWebinarsDetail/ListEventsAndWebinarsDetail";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./EventsAndWebinarsDetail.css";

export default function EventsAndWebinarsDetail() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <ListEventsAndWebinarsDetail></ListEventsAndWebinarsDetail>
      <Faq></Faq>
      <ContactBar></ContactBar>
    </>
  );
}
