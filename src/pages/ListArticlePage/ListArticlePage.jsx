import React, { useEffect } from "react";
import Hero from "../../component/main/Hero/Hero";
import ListArticle from "../../component/main/ListArticle/ListArticle";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./ListArticlePage.css";

export default function ListArticlePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "List Article | GetfitWithPhysio";
  }, []);
  return (
    <>
      <Hero></Hero>
      <ListArticle></ListArticle>
    </>
  );
}
