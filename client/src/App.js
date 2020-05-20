import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect, Link, useParams } from "react-router-dom";
import Home from "./Components/Home";
import ShoppingList from "./Components/AccountMenu/ShoppingList/ShoppingList";
import SignUp from "./Components/Credentials/Sign-up";
import SignIn from "./Components/Credentials/Sign-in";
import SignOut from "./Components/Credentials/SignOut";
import ChangePassword from "./Components/Credentials/Change-password";
import LiveChat from "./Components/LiveChat";
import EditProduct from "./Components/CUD/EditProduct";
import { verifyUser } from "./services/user";
import ProductDetail from "./Components/ProductDetail";
import CreateProduct from "./Components/CUD/CreateProduct";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState();

  return (

    <>
      <div className="App">
        <Link to="/"> Home</Link>
        <Link to="/sign-up"> Sign-up </Link>
        <Link to="/sign-in"> Sign-in </Link>
        <Link to="/change-password"> ChangePassword </Link>
        <Link to="/create-product"> CreateProduct</Link>
      </div>
      <Switch>
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/ShoppingList" render={() => <ShoppingList />} />
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
          <Route exact path="/livechat" render={() => <LiveChat />} />
          <Route
            exact
            path="/create-product"
            render={() => <CreateProduct />}
          />
          {/* <Route
            exact
            path="/change-password"
            render={() => <ChangePassword setCurrentUser={setCurrentUser} />}
          /> */}
          <Route
            exact
            path="/products/:id"
            render={(props) => <ProductDetail productDetail={props} />}
          />
          <Route
            exact
            path="/products/:id/update"
            render={() => <EditProduct />}
          />
          <Route exact path="/sign-out" render={() => <SignOut />} />
        </div>
      </Switch>
    </>
  );
}
export default App;
