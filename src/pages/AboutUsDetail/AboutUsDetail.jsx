import React from "react";
import Header from "../../component/main/Header/Header";
import Hero from "../../component/main/Hero/Hero";
import OurServices from "../../component/main/OurServices/OurServices";
import OurClients from "../../component/main/OurClients/OurClients";
import OurTalentedTeam from "../../component/main/OurTalentedTeam/OurTalentedTeam";
import VisionAndMission from "../../component/main/VisionAndMission/VisionAndMission";
import ContactBar from "../../component/main/ContactBar/ContactBar";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./AboutUsDetail.css";

export default function AboutUsDetail() {
  return (
    <>
      {/* <Header></Header> */}
      <Hero></Hero>
      <OurServices></OurServices>
      <OurClients></OurClients>
      <OurTalentedTeam></OurTalentedTeam>
      <VisionAndMission></VisionAndMission>
      <ContactBar></ContactBar>
    </>
  );
}
