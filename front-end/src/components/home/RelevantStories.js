import React, { Fragment } from "react";
import SmallNewsCard from "./SmallNewsCard";
import Typography from "@material-ui/core/Typography";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  fontFamily: "Open Sans Condensed , sans-serif",
  marginTop: "5%"
};

function RelevantStories() {
  return (
    <Fragment>
      <Typography
        variant="h2"
        style={{
          textAlign: "center",
          marginTop: "12%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        Relevant Stories
      </Typography>
      <div style={divStyle} color="gray">
        <SmallNewsCard title="Markets crash as Saudi Oil losses deepen" />
        <SmallNewsCard title="Global economies worry as trade talks continue" />
        <SmallNewsCard title="China, Trump agree to discuss tariffs" />
        <SmallNewsCard title="Raytheon, United Technologies merger deal" />
        <SmallNewsCard title="Markets rise on MSFT, APPL earnings beat" />
        <SmallNewsCard title="Trump announces all out border funding" />
      </div>
    </Fragment>
  );
}

export default RelevantStories;
