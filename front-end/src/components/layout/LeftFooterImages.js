import React from "react";
import cnnLogo from "../../img/cnn.png";
import cbsLogo from "../../img/cbs.png";
import wsjLogo from "../../img/wallstreet.jpg";
import huffLogo from "../../img/huff.png";

export default function LeftFooterImages() {
  return (
    <div style={{ display: "flex" }}>
      <img src={cnnLogo} alt="cnn" />
      <img src={wsjLogo} alt="wsj" />
      <img src={cbsLogo} alt="cbs" />
      <img src={huffLogo} alt="huff" />
    </div>
  );
}
