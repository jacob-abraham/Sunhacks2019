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
          marginBottom: "5%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        What is Bias?
      </Typography>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        <Typography variant="h6">
          Put simply, bias is the inclusion of anything that indicates a
          preference or favor against or for particular topic. If something were
          to be truly unbiased, there would be nothing besides facts and
          observations present in any news article.
        </Typography>
        <Typography variant="h6">
          <a href="https://www.isidewith.com/political-quiz">
            View your bias here
          </a>
        </Typography>
      </div>
      <Typography
        variant="h2"
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        Why does this matter?
      </Typography>
      <div
        style={{
          textAlign: "center",
          marginTop: "1%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        <Typography variant="h6">
          It is very hard if not impossible to exclude bias from anything. The
          news has a purpose to keep us up to date on important affairs
          throughout the world, but oftentimes bias can force things to be seen
          in a skewed light instead of letting people make conclusions of their
          own.
        </Typography>
      </div>
      <Typography
        variant="h2"
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        What can I do?
      </Typography>
      <div
        style={{
          textAlign: "center",
          marginTop: "1%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        <Typography variant="h6">
          It is up to everyone to watch for their own and other’s biases. If
          people look at a variety of news sources for every event, then they
          are more likely to accurately understand a topic. The goal of this
          website is to help you keep track of the biases in other sites as well
          as your own biases from your preferred news sources.
        </Typography>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "5%",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        <Typography variant="body2">
          Check out this (albeit cringy) video on how some biases are created
          without us even realizing it:
        </Typography>
      </div>
      <div align="center">
        <iframe
          src="https://www.youtube.com/embed/Q8NydsXl32s"
          frameBorder="0"
          title="Clip"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          width="560"
          height="315"
        ></iframe>
      </div>
    </Fragment>
  );
}

export default BiasSection;
