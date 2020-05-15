import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Layout from './Components/shared/Layout';
import ShoppingList from './Components/AccountMenu/ShoppingList/ShoppingList'


function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
        <ShoppingList/>
        </Layout>
      </Switch>
      
    </div>
  );

}

export default App;
