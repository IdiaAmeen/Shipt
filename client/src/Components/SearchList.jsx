import React from 'react'

function SearchList(props) {


  return (

    <div className='searchlist'>
      {props.results.map((result, index) =>
        <div className='list-items'>
          {/* <img
            src={result.[index].name}
            height='170px'
            width='125px'
          /> */}

          <h3 className="search-h3">{result.name}</h3>
        </div>
      )}

    </div>



  )

}


export default SearchList


