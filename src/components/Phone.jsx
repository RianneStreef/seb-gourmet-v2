import React from "react";

import { content } from "../content/languages";

import telephone from "../images/telephone.png";

const Phone = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  return (
    <div className="footer-item">
      <div className="footer-icon-container">
        <img src={telephone} alt="" className="footer-icon" />
      </div>
      <h4>{language.callUs}</h4>
      <a href="tel:0033679783308">
        <p footer-small>
          <i>+33 (0)6 79 78 33 08</i>
        </p>
      </a>
    </div>
  );
};

export default Phone;
