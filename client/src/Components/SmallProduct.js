import React from "react";
import "./SmallProduct.css";

export default function SmallProduct({ product }) {
  return (
    <div className="SmallProduct-container">
      <div className="SmallProduct-image-container">
        <img className="SmallProduct-image" src={product.imgURL}></img>
        <img
          className="SmallProduct-add-image"
          src="/Images/Group 79.png"
        ></img>
      </div>
      <div className="SmallProduct-price">
        <p>$ {product.price}</p>
      </div>
      <div className="SmallProduct-name">
        <p>{product.name}</p>
      </div>
      <div className="SmallProduct-measurement">
        <p>{product.measurement}</p>
      </div>
    </div>
  );
}
