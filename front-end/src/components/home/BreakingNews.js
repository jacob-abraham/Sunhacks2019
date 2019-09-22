import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import "../../App.css";
import NewsCard from "./NewsCard";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  fontFamily: "Open Sans Condensed , sans-serif",
  marginTop: "5%"
};

function BreakingNews(props) {
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
        {props.data.map(article => (
          <NewsCard
            key={article.src}
            title={article.title}
            link={article.link}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default BreakingNews;
