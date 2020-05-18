import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="nav-border">
        <div className="nav-container">
          <img
            className="nav-shipt-logo"
            src="/Images/brand-elements.png"
          ></img>
          <div className="nav-links-container">
            <Link className="nav-question-mark" to="/">
              ?
            </Link>
            <Link to="/">
              <img
                className="nav-account-icon"
                src="/Images/account-icon@2x.png"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className="nav-services-container">
        <div className="nav-services-icons">
          <Link to="">
            <img src="/images/Categories.png"></img>
          </Link>
          <Link to="">
            <img src="/images/SearchIcon.png"></img>
          </Link>
        </div>
        <div className="nav-services-icons">
          <Link to="">
            <img src="/images/1381552 2.png"></img>
          </Link>
          <Link to="">
            <img src="/images/Shopping Cart.png"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
