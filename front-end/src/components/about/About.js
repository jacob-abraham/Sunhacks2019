import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

function About() {
  return (
    <Fragment>
      <Typography
        variant="h2"
        style={{
          textAlign: "center",
          marginTop: "7%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        About Us
      </Typography>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "left",
            marginTop: "%5",
            fontStyle: "strong"
          }}
        >
          Misson:
        </Typography>
        <Typography
          variant="b2"
          style={{
            textAlign: "left",
            marginTop: "%5"
          }}
        >
          Our mission is to provide a means where people can easily see the
          presence of bias in news sources as well as their own, through which
          they can work on improving their exposure to biased media and reach
          their own conclusions about current events.
        </Typography>
        <Typography
          variant="h5"
          style={{
            textAlign: "left",
            marginTop: "%5",
            fontStyle: "italic"
          }}
        >
          How can this website help?
        </Typography>
        <Typography
          variant="h5"
          style={{
            textAlign: "left",
            marginTop: "%5",
            fontStyle: "italic"
          }}
        >
          "nbsp" How does it work?
        </Typography>
        <Typography variant="h6">
          <a href="https://www.isidewith.com/political-quiz">
            View your bias here
          </a>
        </Typography>
      </div>
    </Fragment>
  );
}

export default About;
