import React, { useState, useEffect } from "react";
import { ReactSmartScroller } from "react-smart-scroller";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Route } from "react-router-dom";
import BuyAgain from "./BuyAgain";
import DeliveryTime from "./DeliveryTime";
import ForYou from "./ForYou";
import Modal from "./Modal";
import OnSale from "./OnSale";
import Layout from "./shared/Layout";
import "./Home.css";

export default function Home(props) {
  // const [buyAgainProducts, updateBuyAgainProducts] = useState([]);
  // const [forYouProducts, updateForYouProducts] = useState([]);
  // const [onSaleProducts, updateOnSaleProducts] = useState([]);

  // useEffect(() => {
  //     callGetProducts();
  // }, []);

  // const callGetProducts = async () => {
  //     const apiResults = await axios(
  //         "https://shiptserver.herokuapp.com/api/products"
  //     );
  //     updateBuyAgainProducts(apiResults.data.splice(0, 4));
  //     updateForYouProducts(apiResults.data.splice(0, 4));
  //     updateOnSaleProducts(apiResults.data.splice(0, 4));
  // };

  const productLinkPages = [
    {
      images: [
        {
          url: "/Images/Buy Again Icon.png",
          label: "Buy Again",
        },
        {
          url: "/Images/Shopping Bag Icon.png",
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

  const productLinkImages = [
    {
      url: "/Images/Buy Again Icon.png",
      label: "Buy Again",
    },
    {
      url: "/Images/Shopping Bag Icon.png",
      label: "For You",
    },
    {
      url: "/Images/Sale Icon.png",
      label: "On Sale",
    },
    {
      url: "/Images/Browse Icon.png",
      label: "Browse",
    },
    {
      url: "/Images/Component 1.png",
      label: "Exclusive Savings",
    },
  ];

  const exclusiveSavings = [
    "/Images/Exclusive Saving Desktop.png",
    "/Images/Exclusive Saving Desktop.png",
    "/Images/Exclusive Saving Desktop.png",
    "/Images/Exclusive Saving Desktop.png",
    "/Images/Exclusive Saving Desktop.png",
  ];
  const renderPagination = ({ onNext, onPrev, onDotClick, selectedDot }) => {
    return <></>;
  };

  return (
    <div>
      <Layout user={props.user}>
        <Route exact path="/">
          <Modal />
        </Route>
        <div className="home-delivery-time-container">
          <DeliveryTime />
        </div>
        <div className="home-search-container">
          <img
            className="home-target-logo"
            src="/Images/Target Logo.png"
            alt="Target logo"
          ></img>
          <img
            className="home-target-logo-desktop"
            src="/Images/Target Logo Desktop.png"
            alt="Target logo"
          ></img>
          <img
            className="home-target-text"
            src="/Images/Group 123.png"
            alt="Target text"
          ></img>
          <input
            className="home-search"
            type="text"
            placeholder="Search for..."
          ></input>
        </div>
        <div className="gift-bar">
          <img src="/Images/Gift.png" alt="Gift image"></img>{" "}
          <span>Get $10 Off</span>
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
                    <img
                      className="home-group-icons"
                      src={image.url}
                      alt="group icons"
                    ></img>
                    <span>{image.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </ReactSmartScroller>
        </div>
        <div className="home-products-links-desktop">
          {productLinkImages.map((image, key) => (
            <div className="horizontal-scroll-links-desktop" key={key}>
              <img
                className="home-group-icons"
                src={image.url}
                alt="group icons"
              ></img>
              <p>{image.label}</p>
            </div>
          ))}
        </div>
        <div className="home-layout-desktop">
          <div className="exclusive-savings">
            <img
              src="/Images/Exclusive Saving.png"
              alt="Exclusive Savings"
            ></img>
          </div>
          <div className="exclusive-savings-desktop">
            <ScrollMenu
              data={exclusiveSavings.map((item, key) => {
                return (
                  <div key={key} className="scroll-items-display">
                    <img src={item} alt="group icons" />
                  </div>
                );
              })}
              arrowRight={
                <img src="/Images/Scroll Arrow.png" alt="Scroll arrow"></img>
              }
            />
          </div>
          <BuyAgain results={props.results.buyAgain} />
          <ForYou results={props.results.forYou} />
          <OnSale results={props.results.onSale} />
        </div>
      </Layout>
    </div>
  );
}
