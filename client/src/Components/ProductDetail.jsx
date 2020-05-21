import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Components/shared/Layout"
import "../Components/ProductDetail.css"
import { getProduct, deleteProduct } from "../services/product";

export default function ProductDetail({ product }) {
  const [imgURL, setImgURL] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [measurement, setMeasurement] = useState("");
  const { id } = useParams();

  async function getProductData() {
    let product = await getProduct(id);
    setImgURL(product.imgURL);
    setName(product.name);
    setPrice(product.price);
    setMeasurement(product.measurement);
  }

  useEffect(() => {
    getProductData();
  });

  console.log(id);

  return (
    <Layout>
      <h3 className="page-title">
        Product Details
        </h3>
      <div className="product-page">

        <div className="product-details">
          <img className="product-image" src={imgURL} alt={name} />
          <div className="product-labels">
            <div>${price}</div>
            <br />
            <div>{name}</div>
            <br />
            <div>{measurement}</div>
          </div>
          <div className="buttons-box">
            <button className="edit-button">
              <Link className="button-link" to={`/products/${id}/update`}>
                Edit
              </Link>
            </button>

            <button onClick={() => deleteProduct(id)}>
              <Link to="/" className="button-link">
                Delete
                </Link>
            </button>

          </div>
        </div>
      </div>
    </Layout>
  );
}
