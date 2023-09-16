import React from "react";

import { content } from "../content/languages";

import bedOrange from "../images/icons/bed-orange.png";
import personOrange from "../images/icons/person-orange.png";
import bathOrange from "../images/icons/bath-orange.png";

import "../styles/Intro.css";

const Intro = (props) => {
  let { language, languageToUse } = props;

  console.log(language);

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="intro" id="about">
      <h1>{languageToUse.introText} </h1>
      <h2>{languageToUse.introLocation}</h2>
      <div className="intro-icons-container">
        <div className="intro-icons">
          <img
            src={bedOrange}
            className="intro-icon"
            alt={languageToUse.beds}
          />
          <span>5</span>
        </div>
        <div className="intro-icons">
          <img
            src={personOrange}
            className="intro-icon"
            alt={languageToUse.person}
          />
          <span>6/8</span>
        </div>
        <div className="intro-icons">
          <img
            src={bathOrange}
            className="intro-icon"
            alt={languageToUse.bathroom}
          />
          <span>1</span>
        </div>
        <div className="intro-icons">
          <span>m2</span>
          <span>50</span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
