import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from './Components/shared/Layout';
import Home from "./Components/Home"



function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );

}

export default App;
