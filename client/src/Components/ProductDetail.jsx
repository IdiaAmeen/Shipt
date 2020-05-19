import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/product";

export default function ProductDetail(props) {
  const [imgURL, setImgURL] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [measurement, setMeasurement] = useState("");
  const { id } = useParams();

  async function getProductData() {
    console.log("hello", id)
    let product = await getProduct(id);
    setImgURL(product.imgURL);
    setName(product.name);
    setPrice(product.price);
    setMeasurement(product.measurement);
    console.log("here is ", product)
  }

  useEffect(() => {
    getProductData();
  });


  return (
    <div>

      <img src={imgURL} alt={name}/>
      <div>{name}</div>
      <div>{price}</div>
      <div>{measurement}</div>
    </div>
  );
}
