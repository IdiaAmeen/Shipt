import React from 'react'
import "./Layout.css"
import Footer from "./Footer"
import Nav from "./Nav"


export default function Layout(props) {
    return (
        <div>
            <Nav user={props.user} />
            <div>
                {props.children}
            </div>
            <Footer user={props.user} />
        </div>
    )
}
