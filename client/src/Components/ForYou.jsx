import React from "react";
import "./ItemCarousels.css"


function ForAgain(props) {
  const results = props.results
  return (
    <div>
      <h3>For You</h3>
      <div className='section-box'>
        {props.results.map((result, index) =>
          <div className='list-items'>
            <img
              src={result.imgURL}
              height='170px'
              width='125px'
              alt="item"
            />

            <p className="price">$ {result.price}</p>
            <p className="name">{result.name}</p>
            <p className="measurement">{result.measurement}</p>
          </div>
        )}

      </div>

    </div>
  )

} export default ForAgain
