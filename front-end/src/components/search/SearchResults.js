import React from "react";
import List from "@material-ui/core/List";
import ResultArea from "./ResultArea";

/** Holds the individual results of a search **/
function SearchResults(props) {
  return (
    <List>
      {props.data.map(article => (
        <ResultArea
          key={article.src}
          link={article.link}
          title={article.src} //{article.title}
          bias="7.8" //{article.bias}
        />
      ))}
    </List>
  );
}

export default SearchResults;
