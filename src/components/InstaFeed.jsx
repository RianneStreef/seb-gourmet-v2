import React from "react";

import "../styles/InstaFeed.css";

import { content } from "../content/languages";
import { Helmet } from "react-helmet";

const InstaFeed = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <>
      <Helmet>
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        />
      </Helmet>
      <div id="insta" className="insta">
        <h2>{language.instaFeed}</h2>
        <div className="video-container">
          <iframe
            className="you-tube"
            src="https://www.youtube.com/embed/l7S7Rd8ujDQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div data-mc-src="f10e8e66-aada-4742-9b38-f3d4068eec81#instagram"></div>
      </div>
    </>
  );
};

export default InstaFeed;
