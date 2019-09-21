import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

function Header() {
  return (
    <Fragment>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "10%"
        }}
      >
        <Typography variant="h3">Jonathon Meyers</Typography>
      </div>
    </Fragment>
  );
}

export default Header;
