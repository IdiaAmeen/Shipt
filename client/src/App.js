import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from './Components/shared/Layout';
import Home from "./Components/Home"
import Modal from "./Components/Modal"
​
​
​
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/" render={() => <Modal />} />
      </Switch>
    </div>
  );
​
}
​
export default App;