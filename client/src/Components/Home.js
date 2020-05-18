import React, { useState, useEffect } from "react";
import "./Home.css";
import Layout from "./shared/Layout";
import { Link } from "react-router-dom";
import DeliveryTime from "./DeliveryTime";
import SmallProduct from "./SmallProduct"
import { getProducts } from "./services/product"

export default function Home() {
  const [buyAgainProducts, updateBuyAgainProducts] = useState([])
  const [forYouProducts, updateForYouProducts] = useState([])
  const [onSaleProducts, updateOnSaleProducts] = useState([])

  useEffect(() => {
    callGetProducts()
  }, [])

  const callGetProducts = async () => {
    let apiResults = await getProducts()

    updateBuyAgainProducts(apiResults.splice(0, 4))
    updateForYouProducts(apiResults.splice(0, 4))
    updateOnSaleProducts(apiResults.splice(0, 4))
  }
  
  return (
    <div>
      <Layout>
        <div className="home-delivery-time-container">
          <DeliveryTime />
        </div>
        <div className="home-search-container">
          <img className="home-target-logo" src="/images/Target Logo.png"></img>
          <img className="home-target-text" src="/images/Group 123.png"></img>
          <input
            className="home-search"
            type="text"
            placeholder="Search for..."
          ></input>
        </div>
        <div className="gift-bar">
          <img src="/images/Gift.png"></img> <span>Get $10 Off</span>
        </div>
        <div className="home-products-links">
          <div>
            <img className="home-group-icons" src="/images/Buy Again Icon.png"></img>
            <span>Buy Again</span>
          </div>
          <div>
            <img className="home-group-icons" src="/images/Shopping Bag Icon.png"></img>
            <span>For You</span>
          </div>
          <div>
            <img className="home-group-icons" src="/images/Sale Icon.png"></img>
            <span>On Sale</span>
          </div>
        </div>
        <div>
          <img src="/images/Exclusive Saving.png"></img>
        </div>
        <h3 className="SmallProduct-header">Buy Again</h3>
        <div className="home-SmallProduct-container">
          {buyAgainProducts.map((item) => (
            <div className="SmallProduct-area">
              <SmallProduct product={item} />
            </div>
          ))}
        </div>
        <h3 className="SmallProduct-header">For You</h3>
        <div className="home-SmallProduct-container">
          {forYouProducts.map((item) => (
            <div className="SmallProduct-area">
              <SmallProduct product={item} />
            </div>
          ))}
        </div>
        <h3 className="SmallProduct-header">On Sale</h3>
        <div className="home-SmallProduct-container">
          {onSaleProducts.map((item) => (
            <div className="SmallProduct-area">
              <SmallProduct product={item} />
            </div>
          ))}
        </div>
      </Layout>
    </div>
  );
}
