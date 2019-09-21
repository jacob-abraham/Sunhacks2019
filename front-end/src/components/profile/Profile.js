import React from "react";
import BiasMeter from "./BiasMeter";
import Header from "./Header";
import "../../App.css";

function Profile() {
  return (
    <React.Fragment>
      <section className="container">
        <Header />
        <BiasMeter />
      </section>
    </React.Fragment>
  );
}

export default Profile;
