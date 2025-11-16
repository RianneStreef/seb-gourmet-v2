import React from "react";

import { content } from "../content/languages";

import mail from "../images/envelop.png";

const Mail = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="footer-item">
      <div className="footer-icon-container">
        <img src={mail} alt="" className="footer-icon" />
      </div>
      <h4>{language.mailUs}</h4>
      <a href="mailto:sebgourmettraiteur@orange.fr">
        <p>
          <i>sebgourmettraiteur@orange.fr</i>
        </p>
      </a>
    </div>
  );
};

export default Mail;
