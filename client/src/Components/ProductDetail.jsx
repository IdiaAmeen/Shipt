import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Components/shared/Layout";
import "../Components/ProductDetail.css";
import { getProduct, deleteProduct } from "../services/product";
import Layout from "./shared/Layout";

export default function ProductDetail({ product, user }) {
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
    <>
      <Layout user={user}>
        <h3 className="page-title">Product Details</h3>
        <div className="product-page">
          <div className="product-details">
            <img src={imgURL} alt={name} />
            <div className="product-labels">
              <div>{name}</div>
              <div>${price}</div>
              <div>{measurement}</div>
            </div>
            {user && (
              <>
                <button className="edit-button">
                  <Link className="edit-link" to={`/products/${id}/update`}>
                    Edit
                  </Link>
                </button>
                <Link to="/">
                  <button
                    className="delete-button"
                    onClick={() => deleteProduct(id)}
                  >
                    Delete
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
