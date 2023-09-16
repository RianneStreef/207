import React from "react";

import { content } from "../content/languages";

import "../styles/Description.css";

const Description = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;

  return (
    <div className="description">
      <p>
        {languageToUse.description1}
        <ul>
          <li>{languageToUse.descriptionLi1}</li>
          <li>{languageToUse.descriptionLi2}</li>
          <li>{languageToUse.descriptionLi3}</li>
          <li>{languageToUse.descriptionLi4}</li>
        </ul>
      </p>
      <p>{languageToUse.description2}</p>
      <p>{languageToUse.description3}</p>
    </div>
  );
};

export default Description;
