import React, { useState } from 'react';
import Layout from "../shared/Layout";
import { Redirect } from "react-router-dom";
import { signUp } from "../services/user";
import StaticButtons from "./StaticButtons.jsx";
import { Link } from "react-router-dom"
import "./inputField.css"



const SignUp = (props) => {
    const [confirmPassword, setConfirmPassword] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [signUpCreated, setSignUpCreated] = useState(false);
    const [email, setEmail] = useState();

    const callSignUp = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            alert("Signed Up!");
            const signUpObject = {
                username: userName,
                email: email,
                password: password
            };
            const { user } = await signUp(signUpObject);
            props.setCurrentUser(user);
            setSignUpCreated(true);
            console.log("redirecting")
            return <Redirect to="/" />
        }
        else {
            alert("Passwords Do Not Match")
            return <Redirect to="/sign-up" />
            //! SET THIS UP FOR SIGN UP PAGE
        }
    };

    //TODO: Redirect to homePage on SignUp.
    //! created SetState object, and need to connect to database before redirect
    if (signUpCreated) {
        return <Redirect to="/" />;
    } else {
        return (
            <div>
                <Layout>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                        <div className="sign-up-area">
                            <h1 className="signUpHeader1">Let's Get Started</h1>
                            <p className="signUpHeader2">Nice to meet you</p>
                            <StaticButtons />
                            <p style={{ color: "#838383" }}>_____________________or_____________________</p>
                            <div className="sign-up-input">
                                <h3>Sign up with email</h3>
                                <p className="inputField">Full Name:</p>
                                <input
                                    type="text" placeholder="Enter your full name"
                                    className="inputBox" onChange={(e) => setUserName(e.target.value)}
                                ></input>
                            </div>
                            <div className="sign-up-input">
                                <p className="inputField">Email:</p>
                                <input
                                    type="text" placeholder="Enter your email"
                                    className="inputBox" onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div>
                            <div className="sign-up-input">
                                <p className="inputField">Password:</p>
                                <input
                                    type="password" placeholder="atleast 6 characters"
                                    className="inputBox" onChange={(e) => setPassword(e.target.value)}
                                ></input>
                            </div>
                            <div className="sign-up-input">
                                <p className="inputField">Confirm Password:</p>
                                <input
                                    type="password" placeholder="Re-enter Password"
                                    className="inputBox" onChange={(e) => setConfirmPassword(e.target.value)}
                                ></input>
                            </div>
                            <button className="post-button" onClick={callSignUp}>
                                Sign Up
                            </button>
                            <div>
                                Already have an account?<Link to="/sign-in" style={{ color: "rgb(43,122,95)", fontWeight: "900", textDecoration: "none" }}> Sign In </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default SignUp;