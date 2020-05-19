import React from "react";

import "./ItemCarousels.css"
import SmallProduct from "./SmallProduct"
import ScrollMenu from 'react-horizontal-scrolling-menu';


function OnSale(props) {
  const results = props.results;
  return (
    <div>

      <h3 className="ItemCarousel-header">On Sale</h3>
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
  );
}
export default OnSale;
