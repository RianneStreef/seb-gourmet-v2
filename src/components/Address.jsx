import React from "react";

import { content } from "../content/languages";

import pin from "../images/pin.png";

const Address = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="footer-item">
      <div className="footer-icon-container">
        <img src={pin} alt="" className="footer-icon" />
      </div>
      <h4>{language.address}</h4>

      <p className="address">
        {" "}
        <i>{language.ourAddress} </i>
      </p>

      <p className="address">
        {" "}
        <i>{language.ourAddress2} </i>
      </p>
    </div>
  );
};

export default Address;
