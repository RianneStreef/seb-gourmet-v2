import React from "react";
import "../styles/Hero.css";
import Navbar from "../components/Navbar";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import header1 from "../images/homepage-1.jpg";
import header2 from "../images/header2.jpeg";
import header3 from "../images/header3.jpeg";

import header4 from "../images/header4.jpeg";
import header5 from "../images/header5.jpeg";

function Hero(props) {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  let { language, setLanguage } = props;

  return (
    <div className="hero" id="home">
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="placeholder" />

      <AutoplaySlider
        animation="cubeAnimation"
        className="slider"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src={header1} />

        {language === "french" ? (
          <div data-src={header2} />
        ) : (
          <div data-src={header4} />
        )}
        {language === "french" ? (
          <div data-src={header3} />
        ) : (
          <div data-src={header5} />
        )}
      </AutoplaySlider>
    </div>
  );
}

export default Hero;
