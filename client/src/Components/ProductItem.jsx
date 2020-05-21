import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";

export default function ProductItem({ product }) {
  return (
    <Link className="ProductItem-link" to={"/products/" + product._id}>
      <div className="ProductItem-container">
        <div className="ProductItem-image-container">
          <img className="ProductItem-image" src={product.imgURL}></img>
          <img
            className="ProductItem-add-image"
            src="/Images/Group 79.png"
          ></img>
        </div>
        <div className="ProductItem-price-name">
          <p>$ {product.price}</p>
          <p>{product.name}</p>
        </div>
        <div className="ProductItem-measurement">
          <p>{product.measurement}</p>
        </div>
      </div>
    </Link>
  );
}
