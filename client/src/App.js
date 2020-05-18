import React, { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Search from "./components/Search";
import axios from "axios";
import SearchList from "./components/SearchList";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./components/Home";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
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
    e.preventDefault();
    const response = await axios(
      "https://shiptserver.herokuapp.com/api/products"
    );
    setResults(response.data);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>

      <Route path="/">
        <Modal />
        <Search
          results={results}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={callList}>Go</button>
      </Route>
      <Route exact path="/">
        {results.length && <Redirect to="/searchlist" />}
      </Route>
      <Route exact path="/searchlist">
        <SearchList results={results} />
      </Route>
    </div>
  );
}

export default App;
