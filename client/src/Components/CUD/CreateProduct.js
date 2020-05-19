import React, { useState, useEffect } from 'react'
import Layout from "../shared/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/product";


const CreateProduct = (props) => {

    const [productCreated, upDateProductCreated] = useState(false);
    const [imgURL, updateImgURL] = useState("");
    const [measurement, setMeasurement] = useState("");
    const [name, updateName] = useState("");
    const [price, setPrice] = useState("");


    const callCreateProduct = () => {
        let post = {
            name: name,
            imgURL: imgURL,
            measurement: measurement,
            price: price,
        }
        createProduct(product);
        //redirect to homepage
        upDateProductCreated(true);
    }

    return (
        <div>

        </div>
    )
}

export default CreateProduct