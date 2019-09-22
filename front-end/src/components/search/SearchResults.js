import React from "react";
import List from "@material-ui/core/List";
import ResultArea from "./ResultArea";

function SearchResults(props) {
  return (
    <List>
      {props.map(article => (
        <ResultArea
          key={article.title}
          link={article.source}
          title={article.title} //{article.title}
          bias="7.8" //{article.bias}
        />
      ))}
    </List>
  );
}

export default SearchResults;
