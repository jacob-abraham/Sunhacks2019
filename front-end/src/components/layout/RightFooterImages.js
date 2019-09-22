import React from "react";
import foxLogo from "../../img/fox.png";
import nytimesLogo from "../../img/nytimes.jpg";
import washtimesLogo from "../../img/washtimes.png";
import washpostLogo from "../../img/washpost.jpg";

/** Right side of the footer, holds its images **/
export default function RightFooterImages() {
  return (
    <div style={{ display: "flex" }}>
      <img src={washtimesLogo} alt="wash times" />
      <img src={foxLogo} alt="fox" />
      <img src={nytimesLogo} alt="ny times" />
      <img src={washpostLogo} alt="wash post" />
    </div>
  );
}
