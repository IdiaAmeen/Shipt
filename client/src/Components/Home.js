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
import { ReactSmartScroller } from "react-smart-scroller";

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

  const productLinkPages = [
    {
      images: [
        {
          url: "/images/Buy Again Icon.png",
          label: "Buy Again",
        },
        {
          url: "/images/Shopping Bag Icon.png",
          label: "For You",
        },
        {
          url: "/Images/Sale Icon.png",
          label: "On Sale",
        },
      ],
    },
    {
      images: [
        {
          url: "/Images/Browse Icon.png",
          label: "Browse",
        },
        {
          url: "/Images/Component 1.png",
          label: "Exclusive Savings",
        },
      ],
    },
  ];

  const renderPagination = ({ onNext, onPrev, onDotClick, selectedDot }) => {
    return <></>;
  };

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
          <ReactSmartScroller
            pagination
            draggable
            paginationConfig={{
              activeDotColor: "#5d5d5d",
              unactiveDotsColor: "#d5d5d5",
              draggable: true,
              infinite: true,
            }}
          >
            {productLinkPages.map((page, index) => (
              <div className="horizontal-scroll-links-page" key={index}>
                {page.images.map((image, key) => (
                  <div className="horizontal-scroll-links" key={key}>
                    <img className="home-group-icons" src={image.url}></img>
                    <span>{image.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </ReactSmartScroller>
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
