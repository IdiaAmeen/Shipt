import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import ShoppingList from './Components/AccountMenu/ShoppingList/ShoppingList'


function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home />} />

      <Route exact path="/ShoppingList">
        <ShoppingList />
      </Route>
    </div>
  );
}
export default App;
