import React from "react";
import Phone from "../components/Phone";
import Address from "../components/Address";
import Mail from "../components/Mail";

import "../styles/Footer.css";

import { content } from "../content/languages";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : // eslint-disable-next-line
      (languageToUse = content.french);

  return (
    <div className="footer">
      <Phone language={language} />
      <Address language={language} />
      <Mail language={language} />
    </div>
  );
};

export default Footer;
