import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getProduct, updateProduct } from "../../services/product";
import Layout from "../shared/Layout";

export default function EditProduct(props) {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [price, setPrice] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [edit, setEdit] = useState("");

  const { id } = useParams();

  let product = {
    imgURL: imgURL,
    name: name,
    price: price,
    measurement: measurement,
  };

  const updateInput = () => {
    setInput(id, product);
  };

  async function handleSubmit(e) {
    e.preventDefault()
    const edit = await updateProduct(id, product)
    setEdit(edit)
  }


  return (
    <Layout user={props.user}>
      <div className="edit-container">
        <img className='edit-image' src={imgURL} alt={name}/>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="edit-input"
            placeholder="Image URL"
            value={imgURL}
            name="imgURL"
            required
            autoFocus
            onChange={(e) => setImgURL(e.target.value)}
          />
          <input
            className="edit-input"
            placeholder="Product Name"
            value={name}
            name="name"
            required
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="edit-input"
            placeholder="Product Price"
            value={price}
            name="price"
            required
            autoFocus
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="edit-input"
            placeholder="Product Measurements"
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
      </div>
    </Layout>
  );
}
