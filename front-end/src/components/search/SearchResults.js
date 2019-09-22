import React from "react";
import List from "@material-ui/core/List";
import ResultArea from "./ResultArea";

/** Holds the individual results of a search **/
function SearchResults(props) {
  return (
    <List>
      {props.data.map(article => (
        <ResultArea
          key={article.link}
          link={article.link}
          title={article.title}
          bias={article.bias < 0 ? article.bias * -1 : article.bias}
          color={article.bias < 0 ? "blue" : "red"}
        />
      ))}
    </List>
  );
}

export default SearchResults;
