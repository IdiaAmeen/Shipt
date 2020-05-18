import React, { useState } from "react";
import ShoppingList from "./ShoppingList/ShoppingList";
import { Link, Route } from "react-router-dom";
import "./AccountMenu.css";
import AccountIcon from "../../Assets/account-icon.svg";
import AddressIcon from "../../Assets/address-icon.svg";
import PaymentIcon from "../../Assets/payments-icon.svg";
import OrderHistoryIcon from "../../Assets/order-history-icon.svg";
import RewardsIcon from "../../Assets/rewards-icon.svg";
import ShoppingListIcon from "../../Assets/shopping-list-icon.svg";
import LogoutIcon from "../../Assets/logout-icon.svg";

export default function AccountMenu() {

  return (
          <div className="account-menu-container">
            <ul className="account-menu-ul">
              <li className="account-menu-list">
                <span className="list-name">Profile</span>
                <span className="menu-icon-span">
                  <img
                    className="menu-icon"
                    src={AccountIcon}
                    alt="account icon"
                  />
                </span>
              </li>
              <li className="account-menu-list">
                <span className="list-name">Addresses</span>
                <span className="menu-icon-span">
                  <img
                    className="menu-icon"
                    src={AddressIcon}
                    alt="address icon"
                  />
                </span>
              </li>
              <li className="account-menu-list">
                <span className="list-name">Payments</span>
                <span className="menu-icon-span">
                  <img
                    className="menu-icon"
                    src={PaymentIcon}
                    alt="payment icon"
                  />
                </span>
              </li>
              <li className="account-menu-list">
                <span className="list-name">Order History</span>
                <span className="menu-icon-span">
                  <img
                    className="menu-icon"
                    src={OrderHistoryIcon}
                    alt="order history icon"
                  />
                </span>
              </li>
              <li className="account-menu-list">
                <span className="list-name">Rewards</span>
                <span className="menu-icon-span">
                  <img
                    className="menu-icon"
                    src={RewardsIcon}
                    alt="rewards icon"
                  />
                </span>
              </li>
              <Link className="shopping-list-link" to={"/ShoppingList"}>
                <span className="shopping-list-name">Shopping List</span>
                <span className="shopping-list-icon">
                  <img
                    className="shopping-list-icon"
                    src={ShoppingListIcon}
                    alt="shopping list icon"
                  />
                </span>
              </Link>
              <li className="account-menu-list">
                <span className="list-name">Log Out</span>
                <span className="menu-icon-span">
                  <img
                    className="menu-icon"
                    src={LogoutIcon}
                    alt="logout icon"
                  />
                </span>
              </li>
              <div className="remainder-list"></div>
            </ul>
          </div>      
  );
}
