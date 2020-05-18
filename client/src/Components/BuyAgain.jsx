import React, { useState } from "react";
import { Link, } from 'react-router-dom'

function Search(props) {
  const results = props.results
  return (
    <div>
      <Link to={`/BuyAgainList/`} >Buy Again</Link>
      <div className='buyagainlist'>
        {props.results.map((result, index) =>
          <div className='list-items'>
            <img
              src={result.imgURL}
              height='170px'
              width='125px'
              alt="item"
            />

            <h3 className="search-h3">{result.name}</h3>
          </div>
        )}

      </div>

    </div>
  )

} export default Search


// alt = "item"
// const results = props.results