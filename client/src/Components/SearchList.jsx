import React from "react";

function SearchList(props) {
  return (
    <div className="searchlist">
      {props.results.map((result, index) => (
        <div className="list-items">

          <h3 className="search-h3">{result.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default SearchList;
