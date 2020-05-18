import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Components/shared/Layout"
import Modal from "./Components/Modal";
import Search from "./Components/Search"
import axios from 'axios'
import SearchList from "./Components/SearchList"
import BuyAgain from "./Components/BuyAgain"

function App() {

  const [input, setInput] = useState('');
  const [results, setResults] = useState([])
  // const [buy, setBuy] = useState([])

  // useEffect(() => {
  //   const apiCall = async (e) => {
  //     const response = await axios("https://shiptserver.herokuapp.com/api/products")
  //     // console.log(response.data)
  //     setBuy(response.data)
  //     //Set result filter function ?
  //   }
  //   apiCall()
  // }, [])


  const callList = async (e) => {
    e.preventDefault()
    const response = await axios("https://shiptserver.herokuapp.com/api/products")
    setResults(response.data)
  }


  return (
    <div className="App">
      <Layout>
        <Switch>
          <Modal />

        </Switch>

        <Route path='/'>
          <Search
            results={results}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button onClick={callList}>Go</button>
        </Route>
        <Route
          exact path='/'>
          {results.length && <Redirect to='/searchlist' />}
        </Route>
        <Route exact path='/searchlist'>
          <SearchList results={results} />
        </Route>

      </Layout>
    </div>
  );
}

export default App;
