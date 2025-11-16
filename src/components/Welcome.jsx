import React from "react";
import { content } from "../content/languages";
import "../styles/Welcome.css";
import imgWelcome from "../images/rond-bienvenue.png";

const Welcome = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="welcome" id="welcome">
      <h2 className="welcome-title">{language.welcomeHeader}</h2>
      <div className="welcome-body">
        <div className="welcome-left">
          <p className="line-height">{language.welcomeText}</p>
          <p className="line-height">{language.welcomeText2}</p>
        </div>
        <div className="welcome-right">
          <img src={imgWelcome} alt="Pain" className="welcome-img" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
