import React, { useState } from "react";
import "./Modal.css";
export default function Modal() {
  const [isDisplay, setIsDisplay] = useState(true);

  if (isDisplay === false) {
    return null;
  }
  return (
    <div className="outer-modal">
      <div className="inner-modal">
        <button className="x" onClick={() => setIsDisplay(false)}>
          X
        </button>
        <img className="nav-shipt-logo" src="/Images/brand-elements.png"></img>
        <p>
          Due to high demand, we recommend you choose your preferred delivery
          time before shopping.{" "}
        </p>
        <button className="got-it" onClick={() => setIsDisplay(false)}>
          Got It
        </button>
      </div>
    </div>
  );
}

// Modul most appear on page load .
// When user clicks out it renders home page
