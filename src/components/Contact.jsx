import React from "react";
import Location from "../components/Location";
import ContactForm from "../components/ContactForm";

import { content } from "../content/languages";

import "../styles/Contact.css";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <>
      <div className="contact">
        <div className="contact-options">
          <Location language={language} />
          <ContactForm language={language} languageToUse={languageToUse} />
        </div>
      </div>
    </>
  );
};

export default Contact;
