import React, { useState, useEffect } from 'react'
import Layout from "../shared/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/product";


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
        }
        createProduct(product);
        //redirect to homepage
        upDateProductCreated(true);
    }

    if (productCreated) {
        return <Redirect to="/" />;
    }
    else {
        return (
            <div>
                <Layout>
                    <div>
                        <div className='post-area'>
                            <div className="cudCreateProduct">
                                <h4> name: </h4>
                                <input type="text" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="cudCreateProduct">
                                <h4> Image Link: </h4>
                                <input type="text" onChange={(e) => setImgURL(e.target.value)} />
                            </div>
                            <div className="cudCreateProduct">
                                <h4> Measurement: </h4>
                                <input type="text" onChange={(e) => setMeasurement(e.target.value)} />
                            </div>
                            <div className="cudCreateProduct">
                                <h4> Price: </h4>
                                <input type="text" onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>
                        <button className="cudPostButton" onClick={callCreateProduct}> Submit </button>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default CreateProduct