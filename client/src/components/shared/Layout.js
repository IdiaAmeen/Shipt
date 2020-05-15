import React from 'react'
import "./Layout.css"
import Footer from "./Footer"
import Nav from "./Nav"

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
