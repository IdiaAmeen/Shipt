import React, { useState, useEffect } from "react";
import "./Home.css";
import Layout from "./shared/Layout";
import { Route } from "react-router-dom";
import BuyAgain from "./BuyAgain";
import ForYou from "./ForYou";
import DeliveryTime from "./DeliveryTime";
import Modal from "./Modal";
import axios from "axios";
import OnSale from "./OnSale";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import SmallProduct from "./SmallProduct";

export default function Home() {
  const [buyAgainProducts, updateBuyAgainProducts] = useState([]);
  const [forYouProducts, updateForYouProducts] = useState([]);
  const [onSaleProducts, updateOnSaleProducts] = useState([]);

  useEffect(() => {
    callGetProducts();
  }, []);

  const callGetProducts = async () => {
    const apiResults = await axios(
      "https://shiptserver.herokuapp.com/api/products"
    );
    updateBuyAgainProducts(apiResults.data.splice(0, 4));
    updateForYouProducts(apiResults.data.splice(0, 4));
    updateOnSaleProducts(apiResults.data.splice(0, 4));
  };

  let menuItems = buyAgainProducts.map((item) => {
    return {
      key: item._id,
      ...item,
    };
  });
  
  return (
    <div>
      <Layout>
        <Route exact path="/">
          <Modal />
        </Route>

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
            <img
              className="home-group-icons"
              src="/images/Buy Again Icon.png"
            ></img>
            <span>Buy Again</span>
          </div>
          <div>
            <img
              className="home-group-icons"
              src="/images/Shopping Bag Icon.png"
            ></img>
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

        <BuyAgain results={buyAgainProducts} />
        <ForYou results={forYouProducts} />
        <OnSale results={onSaleProducts} />
        
      </Layout>
    </div>
  );
}
