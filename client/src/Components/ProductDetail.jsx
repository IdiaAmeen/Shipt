import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct, deleteProduct } from "../services/product";
import Layout from "./shared/Layout";
import "./ProductDetail.css";

export default function ProductDetail({ user }) {
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

  return (
    <>
      <Layout user={user}>
        <div className="product-details">
          <img className="product-details-image" src={imgURL} alt={name} />
          <div className="product-details-info">{name}</div>
          <div className="product-details-info">${price}</div>
          <div className="product-details-measurement">{measurement}</div>
          {user && (
            <div className="product-details-buttons">
              <Link
                className="product-details-edit-link"
                to={`/products/${id}/update`}
              >
                <button className="product-details-edit-button">Edit</button>
              </Link>

              <Link className="product-details-delete-link" to="/">
                <button
                  className="product-details-delete-button"
                  onClick={() => deleteProduct(id)}
                >
                  Delete
                </button>
              </Link>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
