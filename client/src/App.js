import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect, Link, useParams } from "react-router-dom";
import Home from "./Components/Home";
import ShoppingList from "./Components/AccountMenu/ShoppingList/ShoppingList";
import SignUp from "./Components/Credentials/Sign-up";
import SignIn from "./Components/Credentials/Sign-in";
import SignOut from "./Components/Credentials/SignOut";
import ChangePassword from "./Components/Credentials/Change-password";


import ProductDetail from './Components/ProductDetail'
import BuyAgainList from "./Components/BuyAgainList";
import Layout from "./Components/shared/Layout"
import EditProduct from "./Components/CUD/EditProduct";
import { verifyUser } from "./services/user";
import ProductDetail from "./Components/ProductDetail";
import CreateProduct from "./Components/CUD/CreateProduct";



function App() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    // const [user, setUser] = useState();

    useEffect(() => {
        reSignIn();
    }, [])

    const reSignIn = async () => {
        const { user } = await verifyUser();
        console.log(user);
        if (user) {
            setCurrentUser(user);
        }
    }

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
                        path="/products/:id"
                        render={(props) => <ProductDetail user={currentUser} productDetail={props} />}
                    />
                    <Route
                        exact
                        path="/products/:id/update"
                        render={() => <EditProduct />}
                    />
                    <Route exact path="/sign-out" render={(props) => <SignOut user={currentUser} setCurrentUser={setCurrentUser} />} />
                    <Route exact path="/BuyAgainList" render={() => <Layout><BuyAgainList /></Layout>} />
                </Switch>
            </div>
        </>
    );

}
export default App;
