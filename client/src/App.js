import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, Link, useParams } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import BuyAgainList from "./Components/BuyAgainList";
import ForYouList from "./Components/ForYouList";
import LiveChat from "./Components/LiveChat";
import ShoppingList from "./Components/AccountMenu/ShoppingList/ShoppingList";
import SignUp from "./Components/Credentials/Sign-up";
import SignIn from "./Components/Credentials/Sign-in";
import SignOut from "./Components/Credentials/SignOut";
import ChangePassword from "./Components/Credentials/Change-password";
<<<<<<< HEAD
=======

import BuyAgainList from "./Components/BuyAgainList";
import Layout from "./Components/shared/Layout";
>>>>>>> develop
import EditProduct from "./Components/CUD/EditProduct";
import ProductDetail from "./Components/ProductDetail";
import CreateProduct from "./Components/CUD/CreateProduct";
import Layout from "./Components/shared/Layout";
import { verifyUser } from "./services/user";
import { getProducts } from "./services/product"


function App() {
  const [input, setInput] = useState("");
<<<<<<< HEAD
  const [results, setResults] = useState({

    buyAgain: [],
    forYou: [],
    onSale: []

  });
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState();

  useEffect(() => {
    callGetProducts();
  }, []);

  const callGetProducts = async () => {
    const apiResults = await getProducts();
    const buyAgain = (apiResults.splice(0, 8));
    const forYou = (apiResults.splice(0, 8));
    const onSale = (apiResults.splice(0, 8));
    setResults({ buyAgain, forYou, onSale })
  };

  return (

    <>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home results={results} />} />
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
=======
  const [results, setResults] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  // const [user, setUser] = useState();

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
          <Route exact path="/ShoppingList" render={() => <ShoppingList />} />
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

>>>>>>> develop
          <Route
            exact
            path="/create-product"
            render={() => <CreateProduct />}
          />
<<<<<<< HEAD

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
          <Route exact path="/BuyAgainList" render={() => <Layout><BuyAgainList
            results={results.buyAgain} title='Buy Again'
          /></Layout>} />
          <Route exact path="/ForYouList" render={() =>
            <Layout>
              <ForYouList results={results.forYou} title='For You'
              />
            </Layout>} />
=======
          <Route
            exact
            path="/change-password"
            render={() => <ChangePassword setCurrentUser={setCurrentUser} />}
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
            render={() => <EditProduct />}
          />
          <Route
            exact
            path="/sign-out"
            render={(props) => (
              <SignOut user={currentUser} setCurrentUser={setCurrentUser} />
            )}
          />
          <Route
            exact
            path="/BuyAgainList"
            render={() => (
              <Layout>
                <BuyAgainList />
              </Layout>
            )}
          />
>>>>>>> develop
        </Switch>
      </div>
    </>
  );
}
export default App;
