import React from "react";
import "../styles/Header.css";
import { content } from "../content/languages";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import { Link } from "gatsby";

import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0;
  padding-left: 0;
  li {
    padding: 5px 10px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    font-weight: 800;
    transition: color 500ms ease;
  }
  li:hover {
    color: #ffa33d;
    transition: color 500ms ease;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #6a6a6a;
    color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 40%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

function RightNav(props) {
  let { open, setOpen, language, setLanguage } = props;

  let languageToUse = content.english;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  }

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }

  return (
    <Ul open={open}>
      {/* <li className="menu-item">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <p className="nav-link">{languageToUse.menuHome}</p>
        </Link>
      </li>
      <span className="dot">&#8226;</span> */}

      <li className="menu-item">
        <Link
          to="/#welcome"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <p className="nav-link">{languageToUse.menuWelcome}</p>
        </Link>
      </li>
      <span className="dot">&#8226;</span>

      <li className="menu-item">
        <Link
          to="/#suggestions"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <p className="nav-link">{languageToUse.menuSuggestions}</p>
        </Link>
      </li>
      <span className="dot">&#8226;</span>

      <li className="menu-item">
        <Link
          to="/#insta"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <p className="nav-link">{languageToUse.menuInsta}</p>
        </Link>
      </li>
      <span className="dot">&#8226;</span>
      <li className="menu-item">
        <Link
          to="/#contact"
          spy={true}
          smooth={true}
          onClick={() => setOpen(!open)}
        >
          <p className="nav-link">{languageToUse.menuContact}</p>
        </Link>
      </li>
      <li>
        {languageToUse.language === "english" ? (
          <img
            className="language-icon"
            src={flagFr}
            onClick={() => handleSetLanguage("french")}
            alt="Set language to French"
          />
        ) : (
          <img
            className="language-icon"
            src={flagEn}
            onClick={() => handleSetLanguage("english")}
            alt="Set language to English"
          />
        )}
      </li>
    </Ul>
  );
}

export default RightNav;
