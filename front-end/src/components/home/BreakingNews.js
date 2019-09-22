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

/** Breaking News Section of home page.
 * Receives the data from the backend and maps each link to a NewsCard**/
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
      {/** For each article in the data, create a new NewsCard with its respective data */}
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
