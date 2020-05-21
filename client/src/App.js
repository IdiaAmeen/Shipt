import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, Link, useParams } from "react-router-dom";
import { verifyUser } from "./services/user";
import Home from "./Components/Home";
import SignUp from "./Components/Credentials/Sign-up";
import SignIn from "./Components/Credentials/Sign-in";
import SignOut from "./Components/Credentials/SignOut";
import ChangePassword from "./Components/Credentials/Change-password";
import LiveChat from "./Components/LiveChat";
import ShoppingList from "./Components/AccountMenu/ShoppingList/ShoppingList";
import ProductDetail from "./Components/ProductDetail";
import EditProduct from "./Components/CUD/EditProduct";
import CreateProduct from "./Components/CUD/CreateProduct";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    reSignIn();
  }, []);

  const reSignIn = async () => {
    const { user } = await verifyUser();
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  };

  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home user={currentUser} />} />
          <Route
            exact
            path="/sign-up"
            render={(props) => <SignUp setCurrentUser={setCurrentUser} />}
          />
          <Route
            exact
            path="/sign-in"
            render={(props) => <SignIn setCurrentUser={setCurrentUser} />}
          />
          <Route exact path="/livechat" render={() => <LiveChat />} />
          <Route
            exact
            path="/create-product"
            render={() => <CreateProduct />}
          />
          <Route
            exact
            path="/change-password"
            render={() => <ChangePassword setCurrentUser={setCurrentUser} />}
          />
          <Route
            exact
            path="/products/shopping-list"
            render={(props) => <ShoppingList user={currentUser} />}
          />
          <Route
            exact
            path="/products/:id"
            render={(props) => (
              <ProductDetail user={currentUser} productDetail={props} />
            )}
          />

          <Route
            exact
            path="/products/:id/update"
            render={() => <EditProduct user={currentUser} />}
          />
          <Route
            exact
            path="/sign-out"
            render={(props) => (
              <SignOut user={currentUser} setCurrentUser={setCurrentUser} />
            )}
          />
        </Switch>
      </div>
    </>
  );
}
export default App;
