import React from "react";

import { Link } from "gatsby";

import { content } from "../content/languages";

import "../styles/Copyright.css";

const Copyright = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  let year = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>
        Copyright
        <sup>
          {" "}
          <i class="far fa-copyright" />{" "}
        </sup>{" "}
        {language.copyright} {year}
      </p>
      <p>
        {language.copyright2} <Link to="/legal">{language.mentionsLegale}</Link>
      </p>
      <p className="vts">
        {language.copyright3}
        <a href="http://www.vts-webdesign.com" target="blank">
          <b>VTS-WebDesign</b>
        </a>
      </p>
    </div>
  );
};

export default Copyright;
