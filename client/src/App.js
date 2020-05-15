
import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from './components/shared/Layout';


function App() {
  return (
    <div className="App">
      <Switch>
        <Layout></Layout>
      </Switch>
    </div>
  );

}

export default App;
