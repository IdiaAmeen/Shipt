import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav-container">
      <img className="nav-shipt-logo" src="/Images/brand-elements.png" ></img>
      <div className="nav-links-container">
        <Link className="nav-question-mark" to="/">?</Link>
        <Link to="/"><img className="nav-account-icon" src="/Images/account-icon@2x.png"></img></Link>
      </div>
    </div>
  )
}
