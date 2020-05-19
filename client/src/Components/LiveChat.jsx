import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LiveChat.css";
import Nav from "./shared/Nav";
export default function LiveChat() {
  const [isDisplay, setIsDisplay] = useState(true);

  if (isDisplay === false) {
    return (
      <>
        <Nav />
      </>
    );
  } else {
    return (
      <div className="inner-modal1">
        <button onClick={() => setIsDisplay(!isDisplay)} className="x1">
          X
        </button>
        <div className="member-shopper1">
          <button id="member1">Member </button>
          <button id="shopper1">Shopper </button>
        </div>
        <div className="chat-box1">
          <div className="greeting1">
            <p>Hi there!</p>
            <p>How can I help you?</p>
          </div>
          <div className="text-box1">
            <input type="text" />
          </div>
        </div>
        <button className="send"> Send </button>
      </div>
    );
  }
}
