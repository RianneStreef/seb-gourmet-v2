import React, { useEffect } from "react";
import "../styles/App.css";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Suggestions from "../components/Suggestions";
import InstaFeed from "../components/InstaFeed";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

import { Helmet } from "react-helmet";
import favicon from "../images/icon.png";

import banner from "../images/banner.jpg";
import bannerEN from "../images/bannerEN.jpg";
import banner2 from "../images/banner2.jpg";

import ReactGA from "react-ga4";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

import { content } from "../content/languages";

const IndexPage = (props) => {
  let { language, setLanguage, languageToUse } = props;
  console.log(props);

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  const initGA = (id) => {
    // if (process.env.NODE_ENV === "production") {
    console.log("InitGA");
    ReactGA.initialize(id);
    //}
  };

  const handleAcceptCookie = () => {
    initGA("G-MEYTRT1XT5");
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();

    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <div className="App">
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
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        buttonText={languageToUse.cookieAccept}
        declineButtonText={languageToUse.cookieDecline}
      >
        <p className="cookie-text-header">{languageToUse.cookieHeader}</p>
        <p className="cookie-text">{languageToUse.cookieText}</p>
      </CookieConsent>
      <Hero
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <Welcome language={language} languageToUse={languageToUse} />

      {language === "french" ? (
        <img
          src={banner}
          className="banner"
          alt="Le partenaire gourmet pour vos évenéments"
        />
      ) : (
        <img
          src={bannerEN}
          className="banner"
          alt="Le partenaire gourmet pour vos évenéments"
        />
      )}

      <Suggestions language={language} languageToUse={languageToUse} />

      <InstaFeed language={language} languageToUse={languageToUse} />

      <Contact language={language} languageToUse={languageToUse} />
      <img
        src={banner2}
        className="banner banner2"
        alt="Le partenaire gourmet pour vos évenéments"
      />
      <Footer language={language} languageToUse={languageToUse} />
      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
