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

export default function ShoppingList(item, index) {
  const [value, setValue] = useState("");
  const [items, setItem] = useState([
    {
      name: "",
      completed: true,
    },
  ]);

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
    <>
    <div className="Account-Shopping-Container">
      <div className="Desktop-Menu-Container">
        <p className="Desktop-Account">Account</p>
        <ul className="Desktop-Menu-UL">
          <li className="Desktop-Menu-List">
            <span className="Desktop-List-Name">Profile</span>
            <span className="Desktop-Menu-Icon-Span">
              <img className="Desktop-Menu-Icon" src={AccountIcon} />
            </span>
          </li>
          <li className="Desktop-Menu-List">
            <span className="Desktop-List-Name">Addresses</span>
            <span className="Desktop-Menu-Icon-Span">
              <img className="Desktop-Menu-Icon" src={AddressIcon} />
            </span>
          </li>
          <li className="Desktop-Menu-List">
            <span className="Desktop-List-Name">Payments</span>
            <span className="Desktop-Menu-Icon-Span">
              <img className="Desktop-Menu-Icon" src={PaymentIcon} />
            </span>
          </li>
          <li className="Desktop-Menu-List">
            <span className="Desktop-List-Name">Order History</span>
            <span className="Desktop-Menu-Icon-Span">
              <img className="Desktop-Menu-Icon" src={OrderHistoryIcon} />
            </span>
          </li>
          <li className="Desktop-Menu-List">
            <span className="Desktop-List-Name">Rewards</span>
            <span className="Desktop-Menu-Icon-Span">
              <img className="Desktop-Menu-Icon" src={RewardsIcon} />
            </span>
          </li>
          <Link className="Desktop-Shopping-List-Link" to={"/ShoppingList"}>
            <span className="Desktop-Shopping-List-Name">Shopping List</span>
            <span className="Desktop-Shopping-List-Icon">
              <img
                className="Desktop-Shopping-List-Icon"
                src={ShoppingListIcon}
              />
            </span>
          </Link>
          <li className="Desktop-Menu-List">
            <span className="Desktop-List-Name">Log Out</span>
            <span className="Desktop-Menu-Icon-Span">
              <img className="Desktop-Menu-Icon" src={LogoutIcon} />
            </span>
          </li>
        </ul>
      </div>
      <div className="Main-Shopping-List-Container">
        <h1 className="Shopping-List">Shopping List</h1>
        <div className="Shopping-List-Form">
          <div className="Input-Section">
            <img className="Add-Icon" src={AddIcon} />

            <form onSubmit={handleSubmit}>
              <input
                className="Shopping-List-Input"
                type="text"
                value={value}
                placeholder="Add Item"
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
          </div>
          <div className="List">
            {items.map((item, index) => (
              <li
                className={item.completed ? "Complete" : "Shopping-List-Items"}
                key={index}
              >
                {item.name}
                <button
                  className={
                    item.completed ? "Deleted" : "Shopping-List-Delete"
                  }
                  onClick={() => removeItem(index)}
                >
                  <span className="Trash">
                    <img className="TrashIcon" src={TrashIcon} />
                  </span>
                </button>
                <button
                  className={
                    item.completed ? "Checked" : "Shopping-List-Complete"
                  }
                  onClick={() => completeItem(index)}
                >
                  <span className="Check">
                    <img className="CheckIcon" src={CheckIcon} />
                  </span>
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
      </div>
      </>
  );
}
