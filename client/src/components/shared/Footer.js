import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <div className="footer-container">
      <img className="footer-logo" src="/Images/Footer logo.png" alt="shipt logo"></img>
      <div className="sign-links">
        {props.user ? (
          <>
            <h1> Welcome {props.user.email}</h1>
          </>
        ) : (
          <>
            <Link to="/sign-up"> Sign-up </Link>
            <Link to="/sign-in"> Sign-in </Link>
          </>
        )}
      </div>
      <div className="credits-desktop">
        <div className="credits-group">
          <h2>Dev Team</h2>
          <p>Ashley Madera | Daehyun Choi | Felipe Lins | Idia Ameen | Saadat Taaseen</p>
        </div>
        <div className="credits-group">
          <h2>UX Team</h2>
          <p>Christine Idrovo | Sam Colonna | Shreya Perti | Yuki Mochizuki</p>
        </div>
      </div>
    </div>
  );
}
