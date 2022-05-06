import React from "react";
import Header from "../../component/main/Header/Header";
import Hero from "../../component/main/Hero/Hero";
import ListArticle from "../../component/main/ListArticle/ListArticle";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ListArticlePage.css";

export default function ListArticlePage() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <ListArticle></ListArticle>
    </>
  );
}
