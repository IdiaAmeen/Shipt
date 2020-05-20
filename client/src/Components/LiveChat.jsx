import React, { useState, useEffect } from "react";

import "./LiveChat.css";
import Nav from "./shared/Nav";
export default function LiveChat() {
  const [isDisplay, setIsDisplay] = useState(true);
  const [userOption, setUserOption] = useState(true);
  useEffect(() => {
    if (userOption === true && isDisplay === true) {
      document.getElementById("member1").style.backgroundColor = "#3a8569";
      document.getElementById("shopper1").style.backgroundColor = "#cfe7e1";
    } else if (userOption !== true && isDisplay === true) {
      document.getElementById("shopper1").style.backgroundColor = "#3a8569";
      document.getElementById("member1").style.backgroundColor = "#cfe7e1";
    }
  });
  if (isDisplay === false) {
    return (
      <>
        <Nav />
      </>
    );
  } else {
    return (
      <div className="outer-modal">
        <div className="inner-modal1">
          <div className="quit">
            <button onClick={() => setIsDisplay(!isDisplay)} className="x1">
              <img src="Images/Group 97.png" alt="X" />
            </button>
          </div>
          <div className="member-shopper1">
            <button id="member1" onClick={() => setUserOption(!userOption)}>
              Member{" "}
            </button>
            <button id="shopper1" onClick={() => setUserOption(!userOption)}>
              Shopper{" "}
            </button>
          </div>
          <div className="chat-box1">
            <div className="greeting1">
              <p>Hi there!</p>
              <p>How can I help you?</p>
            </div>
            <div>
              <input className="text-box1" type="text" />
            </div>
          </div>
          <button className="send"> Send </button>
        </div>
      </div>
    );
  }
}
