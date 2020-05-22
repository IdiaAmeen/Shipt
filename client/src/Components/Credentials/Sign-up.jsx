import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import StaticButtons from "./StaticButtons.jsx";
import Layout from "../shared/Layout";
import "./inputField.css";
import { signUp } from "../../services/user";


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
        password: password,
      };
      const { user } = await signUp(signUpObject);
      props.setCurrentUser(user);
      setSignUpCreated(true);
      console.log("redirecting");
      return <Redirect to="/" />;
    } else {
      alert("Passwords Do Not Match");
      return <Redirect to="/sign-up" />;
    }
  };

  if (signUpCreated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <Layout>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "50px",
            }}
          >
            <div className="wrapperSignUp">
              <div className="allSignUpHeaders">
                <div className="headers">
                  <h1 className="signUpHeader1">Let's Get Started</h1>
                  <p className="signUpHeader2">Nice to meet you</p>
                </div>
                <img
                  className="signUpImage"
                  src="Images/SignUpImage.png"
                  alt="Sign In Image"
                  width="400px"
                />
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div className="sign-up-area">
                  <StaticButtons />
                  <div className="signUp-signIn-separator">
                    <div className="signUp-signIn-or">
                      <span className="signUp-signIn-divider"></span>{" "}
                      <span className="signUp-signIn-or-span">or</span>{" "}
                      <span className="signUp-signIn-divider"></span>
                    </div>
                  </div>

                  <div className="sign-up-input">
                    <h3>Sign up with email</h3>
                    <p className="inputField">Username:</p>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="inputBox"
                      onChange={(e) => setUserName(e.target.value)}
                    ></input>
                  </div>
                  <div className="sign-up-input">
                    <p className="inputField">Email:</p>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="inputBox"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="sign-up-input">
                    <p className="inputField">Password:</p>
                    <input
                      type="password"
                      placeholder="At least 6 characters"
                      className="inputBox"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <div className="sign-up-input">
                    <p className="inputField">Confirm Password:</p>
                    <input
                      type="password"
                      placeholder="Re-enter Password"
                      className="inputBox"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </div>
                  <button className="post-button" onClick={callSignUp}>
                    Sign Up
                  </button>
                  <div style={{ paddingBottom: "20px", fontSize: "12px" }}>
                    Already have an account?
                    <Link
                      to="/sign-in"
                      style={{
                        color: "rgb(43,122,95)",
                        fontWeight: "900",
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      Sign In{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
};

export default SignUp;
