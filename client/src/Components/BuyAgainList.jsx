import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../services/product";
import SmallProduct from "./SmallProduct.js";

function BuyAgainList() {
  const [buyAgainList, updateBuyAgainList] = useState([]);

  useEffect(() => {
    callGetProducts();
  }, []);

  const callGetProducts = async () => {
    const apiResults = await getProducts();
    updateBuyAgainList(apiResults.splice(0, 16));
  };
  return (
    <div>
      <div className="BuyAgainList-text">
        <h2>Buy Again</h2>
        <p>Select products that you have purchased in the past.</p>
      </div>
      <div className="BuyAgainList-container">
        {buyAgainList.map((result, index) => (
          <div key={index} className="list-items">
            <SmallProduct product={result} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default BuyAgainList;
