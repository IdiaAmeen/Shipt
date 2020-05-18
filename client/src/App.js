import React, { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Search from "./components/Search";
import axios from "axios";
import SearchList from "./components/SearchList";
import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./components/Home";

import SignUp from "./Components/Credentials/Sign-up";
import SignIn from "./Components/Credentials/Sign-in";
import ChangePassword from "./Components/Credentials/Change-password";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const [currentUser, setCurrentUser] = useState(null);
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
      <Link to="/"> Home</Link>
      <Link to="/sign-up"> Sign-up </Link>
      <Link to="/sign-in"> Sign-in </Link>
      <Link to="/change-password"> ChangePassword </Link>
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
      <Switch>
        <div>
          <Route
            exact
            path="/sign-up"
            render={() => <SignUp setCurrentUser={setCurrentUser} />}
          />
          <Route
            exact
            path="/sign-in"
            render={() => <SignIn setCurrentUser={setCurrentUser} />}
          />
          <Route
            exact
            path="/change-password"
            render={() => <ChangePassword setCurrentUser={setCurrentUser} />}
          />
        </div>
      </Switch>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import { Switch, Route } from "react-router-dom";
// import Layout from './components/shared/Layout';

// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Layout></Layout>
//       </Switch>
//     </div>
//   );

// }

// export default App;
