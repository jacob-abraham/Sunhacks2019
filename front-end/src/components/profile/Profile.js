import React from "react";
import BiasMeter from "./BiasMeter";
import "../../App.css";

function Profile() {
  return (
    <React.Fragment>
      <section className="container">
        <BiasMeter />
      </section>
    </React.Fragment>
  );
}

export default Profile;
