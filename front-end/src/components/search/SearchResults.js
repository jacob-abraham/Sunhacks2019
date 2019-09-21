import React from "react";
import List from "@material-ui/core/List";
import ResultArea from "./ResultArea";

function SearchResults(props) {
  console.log(props);
  console.log(props.data);
  return (
    <List>
      {props.data.map(article => (
        <ResultArea
          key={article}
          link={article}
          title="Biden, Harris, Bernie go head to head in third democratic debate live" //{article.title}
          bias="7.8" //{article.bias}
        />
      ))}
    </List>
  );
}

export default SearchResults;
