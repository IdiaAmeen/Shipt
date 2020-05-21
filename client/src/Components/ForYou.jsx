import React from "react";
import { Link, } from 'react-router-dom'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SmallProduct from "./SmallProduct"
import "./ItemCarousels.css"


function ForAgain(props) {
  const results = props.results
  return (
    <div>
      <Link className="ItemCarousel-link" to={`/ForYouList/`} >
        <h3 className="ItemCarousel-header">For You</h3>
      </Link>


      <ScrollMenu
        data={(results.map((item, key) => {
          return (
            <div key={item._id} className="scroll-items-display">
              <SmallProduct product={item} key={item._id} />
            </div>
          )
        }))}
        arrowRight={<img src="/Images/Scroll Arrow.png"></img>}
      />
    </div>
  )

} export default ForAgain
