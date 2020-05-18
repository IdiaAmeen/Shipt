import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LiveChat.css";
export default function LiveChat() {
  const [isDisplay, setIsDisplay] = useState(true);

  if (isDisplay === false) {
    return null;
  } else {
    return (
      <div className="outer-modal1">
        <div className="inner-modal1">
          <Link to="/" className="x1">
            X
          </Link>
          <div className="member-shopper1">
            <div id="member1">Member </div>
            <div id="shopper1">Shopper </div>
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
      </div>
    );
  }
}
