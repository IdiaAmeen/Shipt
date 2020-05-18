import React from 'react'
// import './Search.css'


const Search = (props) => {

  return (
    <div>
      <form style={props.style} >
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


//import this line to app.js or Products.jsx with handle event
{/* <form >
<Search
  onChange={e => setInput(e.target.value)}
  value={input}
/>
<button onClick={apiCall}>Go</button>
</form> */}


//import apicall to app.js

const apiCall = async (e) => {
  e.preventDefault()
  const response = await axios("https://shiptserver.herokuapp.com/api/products")
  console.log(response.data)
}