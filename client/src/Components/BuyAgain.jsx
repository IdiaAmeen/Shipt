import React from "react";
import { Link, } from 'react-router-dom'
import "./ItemCarousels.css"
import SmallProduct from "./SmallProduct"
import ScrollMenu from 'react-horizontal-scrolling-menu';

function BuyAgain(props) {
  const results = props.results
  return (
    <div>
      <Link className="ItemCarousel-link" to={`/BuyAgainList/`} >
        <h3 className="ItemCarousel-header">Buy Again</h3>
      </Link>

      <ScrollMenu
        data={(results.map((item, key) => {
          return (
            <div key={item._id} className="scroll-items-display">
              <SmallProduct product={item} key={item._id} />
            </div>
          )
        }))}
        arrowRight={<img src="/Images/Scroll Arrow.png" alt="scroll arrow"></img>}
      />
    </div>
  )

} export default BuyAgain


// alt = "item"
// const results = props.results