import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import AccountMenu from "../AccountMenu/AccountMenu";
import HelpIcon from "../../Assets/help-icon.svg";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="nav-container">
      <img className="nav-shipt-logo" src="/Images/brand-elements.png"></img>
      <div className="nav-links-container">
        <Link className="nav-question-mark" to="/">
          <img src={HelpIcon} className="nav-help-icon" />
        </Link>

        <div className="mobile-menu">
          <button
            className="nav-account-icon"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src="/Images/account-icon@2x.png"
              className="nav-account-icon"
            />
          </button>
          {showMenu && <AccountMenu />}
        </div>

        <Link to="/ShoppingList" className="desktop-nav-container">
          <img
            className="desktop-nav-account-icon"
            src="/Images/account-icon@2x.png"
          />
          <span className="desktop-nav-account-span">Account</span>
        </Link>
      </div>
    </div>
  );
}
