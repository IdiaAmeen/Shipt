import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Components/Home";
import ShoppingList from "./Components/AccountMenu/ShoppingList/ShoppingList";
import SignUp from "./Components/Credentials/Sign-up";
import SignIn from "./Components/Credentials/Sign-in";
import ChangePassword from "./Components/Credentials/Change-password";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <Link to="/"> Home</Link>
      <Link to="/sign-up"> Sign-up </Link>
      <Link to="/sign-in"> Sign-in </Link>
      <Link to="/change-password"> ChangePassword </Link>
      <Switch>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/ShoppingList">
            <ShoppingList />
          </Route>
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
