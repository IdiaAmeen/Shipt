import React from 'react'
// import './Search.css'


function Search(props) {

  return (
    <div>hello
      <form  >
        <input
          type="text"
          placeholder='Search'
          onChange={props.onChange}
          value={props.input}
        />
      </form>
    </div>
  )

}




export default Search