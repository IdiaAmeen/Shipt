import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="footer-container">
            <img className="footer-logo" src="/Images/Footer logo.png"></img>
            <div className="sign-links">
                <Link to="/sign-up"> Sign-up </Link>
                <Link to="/sign-in"> Sign-in </Link>

            </div>
            <div className="credits">
                <div className="credits-group">
                    <h2>Dev Team</h2>
                    <p>Ashley Madera</p>
                    <p>Daehyun Choi</p>
                    <p>Felipe Lins</p>
                    <p>Idia Ameen</p>
                    <p>Saadat Taaseen</p>
                </div>
                <div className="credits-group">
                    <h2>UX Team</h2>
                    <p>Christine Idrovo</p>
                    <p>Sam Colonna</p>
                    <p>Shreya Perti</p>
                    <p>Yuki Mochizuki</p>
                </div>
            </div>
        </div>
    )
}
