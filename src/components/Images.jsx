import React, { useState } from "react";

import "../styles/Images.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";

const Images = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="images">
      <img
        src={img1}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img2}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img3}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <img
        src={img4}
        className="display-image"
        alt=""
        onClick={() => setOpen(true)}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ img1 }, { img2 }, { img3 }, { img4 }]}
      />
    </div>
  );
};

export default Images;
