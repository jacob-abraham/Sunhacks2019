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

function RelevantStories(props) {
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
      <div style={divStyle}>
        {props.data.map(article => (
          <SmallNewsCard key={article.link} title={article.title} />
        ))}
      </div>
    </Fragment>
  );
}

export default RelevantStories;
