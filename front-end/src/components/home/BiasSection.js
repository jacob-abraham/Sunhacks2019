import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

function BiasSection() {
  return (
    <Fragment>
      <Typography
        variant="h2"
        style={{
          textAlign: "center",
          marginTop: "15%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        What is Bias
      </Typography>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        <Typography variant="h6">
          A bias is a tendency, inclination, or prejudice toward or against
          something or someone. Some biases are positive and helpful—like
          choosing to only eat foods that are considered healthy or staying away
          from someone who has knowingly caused harm.
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

export default BiasSection;
