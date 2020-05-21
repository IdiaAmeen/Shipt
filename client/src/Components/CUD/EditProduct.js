import React, { useState, useEffect, useCallback } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { getProduct, updateProduct } from "../../services/product";
import Layout from "../shared/Layout";
import "./EditProduct.css";

export default function EditProduct(props) {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [price, setPrice] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [edited, setEdited] = useState(false);
  const { id } = useParams();

  let product = {
    imgURL: imgURL,
    name: name,
    price: price,
    measurement: measurement,
  };

  const getId = async () => {
    const product = await getProduct(id);
    console.log("here", product);
    console.log("product name", product.name);
    setName(product.name);
    setImgURL(product.imgURL);
    setPrice(product.price);
    setMeasurement(product.measurement);
  };

  useEffect(() => {
    getId();
  }, []);

  const updateInput = () => {
    setInput(id, product);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const edited = await updateProduct(id, product);
    setEdited(edited);
  };

  if (edited) {
    return <Redirect to={`/products/${id}`} />;
  } else {
    return (
      <Layout user={props.user}>
        <div className="main-edit-container">
          <div className="edit-container">
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className="edit-product-title">Image URL:</div>
              <input
                className="edit-input"
                placeholder="Image URL"
                value={imgURL}
                name="imgURL"
                required
                autoFocus
                onChange={(e) => setImgURL(e.target.value)}
              />
              <div className="edit-product-title">Name:</div>
              <input
                className="edit-input"
                placeholder="name"
                value={name}
                name="name"
                required
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <div className="edit-product-title">Price:</div>
              <input
                className="edit-input"
                placeholder="price"
                value={price}
                name="price"
                required
                autoFocus
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="edit-product-title">Measurement:</div>
              <input
                className="edit-input"
                placeholder="measurement"
                value={measurement}
                name="measurement"
                required
                autoFocus
                onChange={(e) => setMeasurement(e.target.value)}
              />
              <button type="submit" className="edit-save-button">
                Save
              </button>
            </form>
            <img className="edit-image" src={imgURL} alt={name} />
          </div>
        </div>
      </Layout>
    );
  }
}
