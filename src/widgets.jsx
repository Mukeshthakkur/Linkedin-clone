import { FiberManualRecordRounded, Info } from "@material-ui/icons";
import React from "react";
import "./widgets.css";

function widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="w_article">
      <div className="wa__left">
        <FiberManualRecordRounded />
      </div>

      <div className="wa__right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="title">

      <h1>Linkedin news</h1>
      <Info />
      </div>

      {newsArticle(
        "Windows 11",
        "Microsoft going to announce window 11 launching date soon..."
      )}
      {newsArticle(
        "Apple",
        "Macbook is now introduction their on M1 chips for upcoming Macs..."
      )}
      {newsArticle(
        "New jobs",
        "new job are going to announce soon on different industries..."
      )}
    </div>
  );
}

export default widgets;
