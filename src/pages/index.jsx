import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Images from "../components/Images";
import Description from "../components/Description";
import Contact from "../components/Contact";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import * as ReactGA from "react-ga";
import CookieConsent from "react-cookie-consent";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  languageToUse = content.french;
  const initGA = (id) => {
    // if (process.env.NODE_ENV === "production") {
    ReactGA.initialize(id);
    //}
  };

  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "fr",
        }}
      >
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="header-placeholder" />
      <CookieConsent enableDeclineButton>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Hero />
      <Intro language={language} />
      <Images />
      <Description language={language} />
      <Contact />
    </div>
  );
};

export default IndexPage;
