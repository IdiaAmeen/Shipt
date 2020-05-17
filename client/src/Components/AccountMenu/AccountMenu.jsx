import React, { useState } from "react";
import ShoppingList from "./ShoppingList/ShoppingList";
import { Link } from "react-router-dom";
import "./AccountMenu.css";
import AccountIcon from "../../Assets/account-icon.svg";
import AddressIcon from "../../Assets/address-icon.svg";
import PaymentIcon from "../../Assets/payments-icon.svg";
import OrderHistoryIcon from "../../Assets/order-history-icon.svg";
import RewardsIcon from "../../Assets/rewards-icon.svg";
import ShoppingListIcon from "../../Assets/shopping-list-icon.svg";
import LogoutIcon from "../../Assets/logout-icon.svg";

export default function AccountMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="account-menu">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="nav-account-icon"
      >
        <img src="/Images/account-icon@2x.png" className="nav-account-icon" />
      </button>
      {showMenu && (
        <nav>
          <div className="account-menu-container">
            <ul className="account-menu-ul">
              <li className="account-menu-list">
                <span className="list-name">Profile</span>
                <span className="menu-icon-span">
                  <img className="menu-icon" src={AccountIcon} />
                </span>
              </li>
              <li className="account-menu-list">
                <span className="list-name">Addresses</span>
                <span className="menu-icon-span">
                  <img className="menu-icon" src={AddressIcon} />
                </span>
              </li>
              <li className="account-menu-list">
                <span className="list-name">Payments</span>
                <span className="menu-icon-span">
                  <img className="menu-icon" src={PaymentIcon} />
                </span>
              </li>
              <li className="account-menu-list">
                <span className="list-name">Order History</span>
                <span className="menu-icon-span">
                  <img className="menu-icon" src={OrderHistoryIcon} />
                </span>
              </li>
              <li className="account-menu-list">
                <span className="list-name">Rewards</span>
                <span className="menu-icon-span">
                  <img className="menu-icon" src={RewardsIcon} />
                </span>
              </li>
              <Link className="shopping-list-link" to={"/ShoppingList"}>
                <span className="shopping-list-name">Shopping List</span>
                <span className="shopping-list-icon">
                  <img className="shopping-list-icon" src={ShoppingListIcon} />
                </span>
              </Link>
              <li className="account-menu-list">
                <span className="list-name">Log Out</span>
                <span className="menu-icon-span">
                  <img className="menu-icon" src={LogoutIcon} />
                </span>
              </li>
              <div className="remainder-list"></div>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}
