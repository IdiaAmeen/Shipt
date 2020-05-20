import React, { useState, useEffect } from "react";
import Layout from "../shared/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/product";
import "./CreateProduct.css";

const CreateProduct = (props) => {
  const [productCreated, upDateProductCreated] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //! Creates Product and runs this function
  const callCreateProduct = () => {
    let product = {
      name: name,
      imgURL: imgURL,
      measurement: measurement,
      price: price,
    };
    createProduct(product);
    //redirect to homepage
    upDateProductCreated(true);
  };

  if (productCreated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <Layout>
          <div id="cudWrapperWrapper">
            <div id="cudWrapper">
              <h1>Add Product Information Here:</h1>

              <div className="cudPostArea">
                <div>
                  <h4 className="cudInputField"> name: </h4>
                  <input
                    className="cudInputBox"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <h4 className="cudInputField"> Image Link: </h4>
                  <input
                    className="cudInputBox"
                    type="text"
                    onChange={(e) => setImgURL(e.target.value)}
                  />
                </div>
                <div>
                  <h4 className="cudInputField"> Measurement: </h4>
                  <input
                    className="cudInputBox"
                    type="text"
                    onChange={(e) => setMeasurement(e.target.value)}
                  />
                </div>
                <div>
                  <h4 className="cudInputField"> Price: </h4>
                  <input
                    className="cudInputBox"
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <button className="cudPostButton" onClick={callCreateProduct}>
                {" "}
                Add Product{" "}
              </button>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
};

export default CreateProduct;
