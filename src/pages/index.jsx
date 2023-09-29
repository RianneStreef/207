import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Images from "../components/Images";
import Description from "../components/Description";
import Contact from "../components/Contact";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import ReactGA from "react-ga4";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  languageToUse = content.french;

  const initGA = (id) => {
    // if (process.env.NODE_ENV === "production") {
    console.log("InitGA");
    ReactGA.initialize(id);
    //}
  };

  const handleAcceptCookie = () => {
    initGA("G-Q3TL22V32Y");
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    // if (isConsent) {
    //   document.getElementById("cookieConsent").style.display = "none";
    // }
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

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
      {/* <div className="cookie-consent" id="cookieConsent">
        <p className="cookie-consent-text">
          {" "}
          This website uses cookies to enhance the user experience.
        </p>
        <div className="cookie-consent-buttons">
          <button className="cookie-accept" onClick={handleAcceptCookie}>
            Accept{" "}
          </button>
          <button className="cookie-decline" onClick={handleDeclineCookie}>
            Decline{" "}
          </button>
        </div>
      </div> */}
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
        style={{}}
        buttonStyle={{ background: "#f76a04", fontFamily: "Roboto Bold" }}
      >
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
