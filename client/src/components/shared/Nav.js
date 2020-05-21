import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";
import HelpIcon from "../../Assets/help-icon.svg";
import LiveChat from "../LiveChat";
import DeliveryTime from "../DeliveryTime";

export default function Nav(props) {
  const [showMenu, setShowMenu] = useState(false);
  let [isDisplay, setIsDisplay] = useState(false);
  if (isDisplay === true) {
    return (
      <div>
        <LiveChat />
      </div>
    );
  } else {
    return (
      <div>
        <div className="nav-border">
          <div className="nav-container">
            <Link to="/">
              <img
                className="nav-shipt-logo"
                src="/Images/brand-elements.png"
                alt="shipt-logo"
              ></img>
            </Link>
            <div className="nav-links-container">
              <img
                className="desktop-nav-account-icon"
                src="/Images/Group 81.png"
                alt="account-icon"
              />
              <img
                className="desktop-nav-account-icon"
                src="/Images/Group 82.png"
                alt="account-icon"
              />
              <img
                className="desktop-nav-account-icon"
                src="/Images/Group 84.png"
                alt="account-icon"
              />
              <Link className="nav-question-mark" to="/">
                <img src={HelpIcon} className="nav-help-icon" alt="help-icon" />
              </Link>
              <div className="mobile-menu">
                <Link
                  className="nav-account-icon"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <img
                    src="/Images/account-icon@2x.png"
                    className="nav-account-icon"
                    alt="account-icon"
                  />
                </Link>
                <div className="drop-down">{showMenu && <AccountMenu />}</div>
              </div>
              <Link
                to="/products/shopping-list"
                className="desktop-nav-container"
              >
                <img
                  className="desktop-nav-account-icon"
                  src="/Images/account-icon@2x.png"
                  alt="account-icon"
                />
                <div className='this-account-title'>
                  {props.user ? (
                    <>
                      <span className="desktop-nav-account-span">
                        {props.user.username}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="desktop-nav-account-span">Account</span>
                    </>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="nav-services-box-shadow">
          <div className="nav-services-container">
            <div className="nav-services-icons">
              <Link to="">
                <img src="/images/Categories.png" alt="Categories"></img>
              </Link>
              <Link to="">
                <img src="/images/SearchIcon.png" alt="SearchIcon"></img>
              </Link>
            </div>
            <div className="nav-services-icons-desktop">
              <img src="/Images/Target Logo.png" alt="Target-logo"></img>
              <div className="delivery-target-text-container">
                <p className="delivery-text">Delivery</p>
                <p className="target-text">Target ▼</p>
              </div>
              <div className="nav-delivery-time-container">
                <DeliveryTime />
              </div>
              <div className="vertical-line"></div>
              <div className="nav-categories-desktop-container">
                <Link className="nav-categories-desktop" to="">
                  <img src="/images/Categories.png" alt="categories"></img>
                </Link>
                <p>Categories</p>
              </div>
            </div>
            <div className="nav-services-icons">
              <button
                className="nav-services-icons"
                onClick={() => setIsDisplay(!isDisplay)}
              >

                <img src="/images/1381552 2.png" className="nav-services-icons" alt="services icon" />

              </button>
              <Link to="">
                <img src="/images/Shopping Cart.png" alt="shopping cart icon"></img>
              </Link>
            </div>
            <div className="nav-services-icons-desktop">
              <div className="nav-services-icons-container">
                <Link
                  className="cart-icon-desktop"
                  onClick={() => setIsDisplay(!isDisplay)}
                >
                  <img src="/images/1381552 2.png" alt="live chat" />
                </Link>
                <p>Live Chat</p>
              </div>
              <div className="nav-services-icons-container">
                <Link className="cart-icon-desktop" to="">
                  <img src="/images/Shopping Cart.png" alt="cart icon"></img>
                </Link>
                <p>Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
