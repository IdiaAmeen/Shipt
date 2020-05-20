import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingList.css";
import AddIcon from "../../../Assets/add-icon.svg";
import TrashIcon from "../../../Assets/trash-icon.svg";
import CheckIcon from "../../../Assets/check-icon.svg";
import AccountIcon from "../../../Assets/account-icon.svg";
import AddressIcon from "../../../Assets/address-icon.svg";
import PaymentIcon from "../../../Assets/payments-icon.svg";
import OrderHistoryIcon from "../../../Assets/order-history-icon.svg";
import RewardsIcon from "../../../Assets/rewards-icon.svg";
import ShoppingListIcon from "../../../Assets/shopping-list-icon.svg";
import LogoutIcon from "../../../Assets/logout-icon.svg";
import Layout from "../../shared/Layout";

export default function ShoppingList(item, index, user) {
  const [value, setValue] = useState("");
  const [items, setItem] = useState([]);

  const addItem = (name) => {
    const newItems = [...items, { name, completed: false }];
    setItem(newItems);
  };

  const completeItem = (index) => {
    const newItems = [...items];
    newItems[index].completed = true;
    setItem(newItems);
  };
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItem(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  return (
    <Layout user={user}>
      <div className="account-shopping-container">
        <div className="desktop-menu-container">
          <p className="desktop-account">Account</p>
          <ul className="desktop-menu-ul">
            <li className="desktop-menu-list">
              <span className="desktop-list-name">Profile</span>
              <span className="desktop-menu-icon-span">
                <img className="desktop-menu-icon" src={AccountIcon} />
              </span>
            </li>
            <li className="desktop-menu-list">
              <span className="desktop-list-name">Addresses</span>
              <span className="desktop-menu-icon-span">
                <img
                  className="desktop-menu-icon"
                  src={AddressIcon}
                  alt="address icon"
                />
              </span>
            </li>
            <li className="desktop-menu-list">
              <span className="desktop-list-name">Payments</span>
              <span className="desktop-menu-icon-span">
                <img
                  className="desktop-menu-icon"
                  src={PaymentIcon}
                  alt="payment icon"
                />
              </span>
            </li>
            <li className="desktop-menu-list">
              <span className="desktop-list-name">Order History</span>
              <span className="desktop-menu-icon-span">
                <img
                  className="desktop-menu-icon"
                  src={OrderHistoryIcon}
                  alt="order history icon"
                />
              </span>
            </li>
            <li className="desktop-menu-list">
              <span className="desktop-list-name">Rewards</span>
              <span className="desktop-menu-icon-span">
                <img
                  className="desktop-menu-icon"
                  src={RewardsIcon}
                  alt="rewards icon"
                />
              </span>
            </li>
            <Link className="desktop-menu-list-link" to={"/ShoppingList"}>
              <span className="desktop-link-name">Shopping List</span>
              <span className="desktop-active-icon">
                <img
                  className="desktop-active-icon"
                  src={ShoppingListIcon}
                  alt="shopping list icon"
                />
              </span>
            </Link>
            <Link className="desktop-menu-list-link" to="/sign-out">
              <span className="desktop-link-name">Log Out</span>
              <span className="desktop-active-icon">
                <img
                  className="desktop-active-icon"
                  src={LogoutIcon}
                  alt="logout-icon"
                />
              </span>
            </Link>
          </ul>
        </div>
        <div className="main-shopping-list-container">
          <h1 className="shopping-list">Shopping List</h1>
          <div className="shopping-list-form">
            <div className="input-section">
              <img className="add-icon" src={AddIcon} alt="add icon" />

              <form onSubmit={handleSubmit}>
                <input
                  className="shopping-list-input"
                  type="text"
                  value={value}
                  placeholder="Add Item"
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
            </div>
            <div className="list">
              {items.map((item, index) => (
                <li
                  className={
                    item.completed ? "complete" : "shopping-list-items"
                  }
                  key={index}
                >
                  {item.name}
                  <button
                    className={
                      item.completed ? "deleted" : "shopping-list-delete"
                    }
                    onClick={() => removeItem(index)}
                  >
                    <span className="trash">
                      <img className="trash-icon" src={TrashIcon} />
                    </span>
                  </button>
                  <button
                    className={
                      item.completed ? "checked" : "shopping-list-complete"
                    }
                    onClick={() => completeItem(index)}
                  >
                    <span className="check">
                      <img className="check-icon" src={CheckIcon} />
                    </span>
                  </button>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
