import Layout from "../shared/Layout";
import { signIn } from "../services/user";
import { Redirect } from "react-router-dom";
import React, { useState } from 'react'
import StaticButtons from "./StaticButtons.jsx";
import { Link } from "react-router-dom";
import "./inputField.css"

export default function SignIn(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [signInCreated, setSignInCreated] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const signInAndRedirect = async (e) => {
        e.preventDefault();
        const signInObject = {
            username: username,
            password: password,
        };
        try {

            let user = await signIn(signInObject);
            user = user.user
            props.setCurrentUser(user);
            // console.log(user);

            //! created SetState object, and need to connect to database before redirect
            setSignInCreated(!!user._id);
        }
        catch (error) {
            setErrorMessage("Invalid Credentials. Please try again!")
        }
    };
    if (signInCreated) {
        //TODO: Redirect to homePage on SignIn.
        // alert("Found Credentials")
        return <Redirect to="/" />;
    }

    else {
        return (
            <div>
                <Layout>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                        <div className="sign-in-area">
                            <h1 className="signUpHeader1"> Welcome Back!</h1>
                            <p className="signUpHeader2">Your day is about to get a whole lot easier.</p>
                            <StaticButtons />

                            <p style={{ color: "#838383" }}>_____________________or_____________________</p>
                            {/* Guard Operator */}
                            <p style={{ color: "red", fontWeight: "900" }}>

                                {errorMessage && errorMessage}
                            </p>
                            <div className="log-in-input">
                                <p className="inputField">Username:</p>
                                <input
                                    type="text"
                                    className="inputBox" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}
                                ></input>
                            </div>
                            <div className="log-in-input">
                                <p className="inputField">Password:</p>
                                <input
                                    type="password"
                                    className="inputBox" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}
                                ></input>
                            </div>
                            <div style={{ paddingTop: "20px", transform: "translateX(-18%)" }}>
                                <Link to="./change-password" style={{
                                    color: "black", textDecoration: "none", fontWeight: "900", fontSize: "10px"
                                }}>
                                    Forgot Password?
                            </Link>
                            </div>
                            <button className="post-button" onClick={signInAndRedirect}>
                                Log in
                        </button>
                            <div>
                                Don't have an account?<Link to="/sign-up" style={{ color: "rgb(43,122,95)", fontWeight: "900", textDecoration: "none" }}> SignUp </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div >
        )
    }
}
