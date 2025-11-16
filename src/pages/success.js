import React from "react";

import "../styles/Success.css";
import Navbar2 from "../components/Navbar2";

import { content } from "../content/languages";

import { Helmet } from "react-helmet";
import favicon from "../images/icon.png";

const SuccessPage = (props) => {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  // let languageStoredInLocalStorage = localStorage.getItem("language");

  // languageStoredInLocalStorage ? languageStoredInLocalStorage : "french";

  return (
    <>
      <Helmet>
        <title>Seb Gourmet Traiteur </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Traiteur basé dans le Valle des Belleville, Savoie"
        />
        <meta name="keywords" content="traiteur, les Belleville, Savoie" />
        <link rel="canonical" href="https://www.sebgourmet-traiteur.com/" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="success-message">
        <Navbar2
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
        <div>
          <p> {languageToUse.success}</p>
          <p>
            <a href="/"> &#8592; {languageToUse.back}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
