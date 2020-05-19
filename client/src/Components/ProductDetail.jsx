import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/product";

export default function ProductDetail(props) {
  const [imgURL, setImgURL] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [measurement, setMeasurement] = useState("");
  const { id } = props.productDetail.match.params;

  async function getProductData() {
    let product = await getProduct(id);
    setImgURL(product.imgURL);
    setName(product.name);
    setPrice(product.price);
    setMeasurement(product.measurement);
  }
  console.log(id)

  useEffect(() => {
    getProductData();
  });

console.log(props.productDetail)

  return (
    <div>
      <h1>Hello</h1>

      <img src={imgURL} alt={name}/>
      <div>{name}</div>
      <div>{price}</div>
      <div>{measurement}</div>
    </div>
  );
}
