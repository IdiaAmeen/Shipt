import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Modal />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
