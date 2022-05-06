import React from "react";
import Header from "../../component/main/Header/Header";
import Hero from "../../component/main/Hero/Hero";
import AboutUs from "../../component/main/AboutUs/AboutUs";
import OurServices from "../../component/main/OurServices/OurServices";
import LatestNews from "../../component/main/LatestNews/LatestNews";
import EventsAndWebinars from "../../component/main/EventsAndWebinars/EventsAndWebinars";
import WhyGetfit from "../../component/main/WhyGetfit/WhyGetfit";
import OurClients from "../../component/main/OurClients/OurClients";
import LatestArticle from "../../component/main/LatestArticle/LatestArticle";
import Faq from "../../component/main/Faq/Faq";
import Testimonials from "../../component/main/Testimonials/Testimonials";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Home.css";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <OurServices></OurServices>
      <LatestNews></LatestNews>
      <EventsAndWebinars></EventsAndWebinars>
      <WhyGetfit></WhyGetfit>
      <OurClients></OurClients>
      <LatestArticle></LatestArticle>
      <Faq></Faq>
      <Testimonials></Testimonials>
    </>
  );
}
