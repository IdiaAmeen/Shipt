
import React, { useState, useEffect } from "react";
import './App.css';
import { Route } from "react-router-dom";
import Home from "./Components/Home"


function App() {


  return (
    <div className="App">

      <Route exact path="/" render={() => <Home />} />

    </div>
  );

}

export default App;