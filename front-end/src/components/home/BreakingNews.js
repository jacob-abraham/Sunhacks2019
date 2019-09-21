import React, { Fragment } from "react";
import NewsCard from "./NewsCard";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  fontFamily: "Open Sans Condensed , sans-serif",
  marginTop: "5%"
};

function BreakingNews() {
  return (
    <Fragment>
      <Typography
        variant="h1"
        style={{
          textAlign: "center",
          fontFamily: "Open Sans Condensed , sans-serif"
        }}
      >
        Breaking News
      </Typography>

      <div style={divStyle}>
        <NewsCard
          title="From CNN: DNC Third Debate Kicks off Tomorrow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
            Mauris posuere quam eu tortor malesuada, quis vestibulum quam bibendum."
        />
        <NewsCard
          title="From Fox: The Third Democratic Debate, Live"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris posuere quam eu tortor malesuada, quis vestibulum quam bibendum."
        />
        <NewsCard
          title="From NBC: Watch the DNC candidates go head to head"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris posuere quam eu tortor malesuada, quis vestibulum quam bibendum."
        />
      </div>
    </Fragment>
  );
}

export default BreakingNews;
