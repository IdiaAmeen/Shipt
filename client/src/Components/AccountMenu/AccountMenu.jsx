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
  // const [toggleOn, setToggleOn] = useState(false);
  // const [style, setStyle] = useState({});
  // const divStyle1 = {
  //   display: "block",
  //   transition: "opacity 2s ",
  //   opacity: "1",
  // };
  // const divStyle2 = {
  //   transition: "opacity 0.2s ",
  //   opacity: "0",
  //   height: "0",
  // };
  // const toggleHamburgerMenu = () => {
  //   toggleOn ? setToggleOn(false) : setToggleOn(true);
  //   toggleStyle();
  // };
  // const toggleStyle = () => {
  //   if (toggleOn) {
  //     setStyle(divStyle1);
  //   } else {
  //     setStyle(divStyle2);
  //   }
  // };
  return (
    <div>
      <nav>
        {/* <button onClick={toggleHamburgerMenu}>Click Me</button> */}
        <div className="Account-Menu-Container">
          <ul className="Account-Menu-UL">
            <li className="Account-Menu-List">
              <span className="List-Name">Profile</span>
              <span className="Menu-Icon-Span">
                <img className="Menu-Icon" src={AccountIcon} />
              </span>
            </li>
            <li className="Account-Menu-List">
              <span className="List-Name">Addresses</span>
              <span className="Menu-Icon-Span">
                <img className="Menu-Icon" src={AddressIcon} />
              </span>
            </li>
            <li className="Account-Menu-List">
              <span className="List-Name">Payments</span>
              <span className="Menu-Icon-Span">
                <img className="Menu-Icon" src={PaymentIcon} />
              </span>
            </li>
            <li className="Account-Menu-List">
              <span className="List-Name">Order History</span>
              <span className="Menu-Icon-Span">
                <img className="Menu-Icon" src={OrderHistoryIcon} />
              </span>
            </li>
            <li className="Account-Menu-List">
              <span className="List-Name">Rewards</span>
              <span className="Menu-Icon-Span">
                <img className="Menu-Icon" src={RewardsIcon} />
              </span>
            </li>
            <Link className="Shopping-List-Link" to={"/ShoppingList"}>
              <span className="Shopping-List-Name">Shopping List</span>
              <span className="Shopping-List-Icon">
                <img className="Shopping-List-Icon" src={ShoppingListIcon} />
              </span>
            </Link>
            <li className="Account-Menu-List">
              <span className="List-Name">Log Out</span>
              <span className="Menu-Icon-Span">
                <img className="Menu-Icon" src={LogoutIcon} />
              </span>
            </li>
            <div className="Remainder-List"></div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
