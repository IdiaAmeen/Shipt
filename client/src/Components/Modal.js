import React, { useState } from "react";
import "./Modal.css";
export default function Modal() {
  const [isDisplay, setIsDisplay] = useState(true);

  if (isDisplay === false) {
    return null;
  } else {
    return (
      <div className="outer-modal">
        <div className="inner-modal">
          <div className="x-box">
            <button className="x" onClick={() => setIsDisplay(false)}>
              X
          </button>
          </div>
          <div className="main-inner">
            <img
              className="nav-shipt-logo"
              src="/Images/brand-elements.png"
              alt="product"
            ></img>
            <p>
              Due to high demand, we recommend you choose your preferred delivery
            time before shopping.{" "}
            </p>
            <button className="got-it" onClick={() => setIsDisplay(false)}>
              Got It
          </button>
          </div>

        </div>
      </div>
    );
  }
}

