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
      {/* <div className='ItemCarousel-container'>
        {props.results.map((result, index) => (
          <div className="SmallProduct-area">
            <SmallProduct product={result} />
          </div>
        ))}

      </div> */}
      <ScrollMenu 
          data={(results.map(item => {
            return (
              <div className="scroll-items-display">
                <SmallProduct product={item} />
              </div>
            )
          }))}
          arrowRight={<img src="/Images/Scroll Arrow.png"></img>}
        />
    </div>
  )

} export default BuyAgain


// alt = "item"
// const results = props.results