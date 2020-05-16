import React, { useState } from 'react'
import { changePassword } from "../services/user";
import { Redirect, Link } from "react-router-dom";
import Layout from "../shared/Layout";
import "./inputField.css";




export default function ChangePassword(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const signInAndRedirect = async (e) => {
        e.preventDefault();

        if (password === newPassword) {
            setErrorMessage("Passwords Match. Please enter a different password")
        }
        else {
            const signInObject = {
                username: username,
                password: password,
                newPassword: newPassword
            };
            try {

                let user = await changePassword(signInObject);
                user = user.user
                props.setCurrentUser(user);
                // console.log(user);

                //! created SetState object, and need to connect to database before redirect
                setPasswordChanged(!!user._id);
            }
            catch (error) {
                setErrorMessage("Please try again!")
            }
        }
    };
    if (passwordChanged) {
        //TODO: Redirect to homePage on SignIn.
        alert("Passwords Changed")
        return <Redirect to="/" />;
    }



    return (
        <div>
            <Layout>
                <div style={{ justifyContent: "center", display: "flex" }}>
                    <div className="sign-in-area">
                        <h1 className="signUpHeader1"> We'll Change your Password In No Time!</h1>
                        <p className="signUpHeader2">Fret Not! We're here to make this easy</p>


                        <div >
                            <p className="inputField">Username:</p>
                            <input
                                type="text"
                                className="inputBox" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="inputField">Password:</p>
                            <input
                                type="password"
                                className="inputBox" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="inputField">Enter New Password:</p>
                            <input
                                type="password"
                                className="inputBox" placeholder="Enter new password" onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div style={{ paddingTop: "20px", transform: "translateX(-15%)" }}>
                            <Link to="./sign-in" style={{
                                color: "black", textDecoration: "none", fontWeight: "900", fontSize: "10px"
                            }}>
                                Remember Password?
                            </Link>
                        </div>
                        <p style={{ color: "red", fontWeight: "900" }}>

                            {errorMessage && errorMessage}
                        </p>
                        <button className="post-button" onClick={signInAndRedirect}>
                            Continue
                        </button>
                        <div>
                            Don't have an account?<Link to="/sign-up" style={{ color: "rgb(43,122,95)", fontWeight: "900", textDecoration: "none" }}> SignUp </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
