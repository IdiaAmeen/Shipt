import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./Components/shared/Layout";
import ShoppingList from "./Components/AccountMenu/ShoppingList/ShoppingList";
import AccountMenu from "./Components/AccountMenu/AccountMenu";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route exact path='/'>
            <AccountMenu />
          </Route>
          <Route path="/ShoppingList">
            <ShoppingList />
          </Route>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
