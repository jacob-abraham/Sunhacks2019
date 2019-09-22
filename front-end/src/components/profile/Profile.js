import React from "react";
import ProfileCard from "./ProfileCard";
import "../../App.css";
import InfoPanes from "./InfoPanes";

function Profile() {
  return (
    <React.Fragment>
      <section className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "spacing-between"
          }}
        >
          <ProfileCard />
          <InfoPanes />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Profile;
