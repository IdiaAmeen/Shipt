import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct, deleteProduct } from "../services/product";
import Layout from "./shared/Layout"

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
            <Layout user={user} >
                <div className="product-details">
                    <img src={imgURL} alt={name} />
                    <div>{name}</div>
                    <div>${price}</div>
                    <div>{measurement}</div>
                    {user &&
                        <>
                            <button className="edit-button">
                                <Link className="edit-link" to={`/products/${id}/update`}>
                                    Edit
                </Link>
                            </button>
                            <Link to="/">
                                <button className="delete-button" onClick={() => deleteProduct(id)}>
                                    Delete
                </button>
                            </Link>
                        </>
                    }

                </div>
            </Layout>
        </>
    );
}
