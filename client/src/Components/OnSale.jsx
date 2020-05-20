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
  );
}
export default OnSale;
