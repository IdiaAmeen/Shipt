import React from "react";
import ProductItem from "./ProductItem.jsx";
import "./ProductItemPage.css"


function ForYouList(props) {
  return (
    <div className="ProductItemPage-body">
      <div className="ProductItemPage-text">
        <h2>{props.title}</h2>
        <p>Select products hand pick for you.</p>
      </div>
      <div className="ProductItemPage-container">
        {props.results.map((result, index) => (
          <div key={index} className="list-items">
            <ProductItem product={result} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ForYouList;