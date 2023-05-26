import React, { useState } from "react";
import "./LoginScreen.css";
import SignIn from "./SignIn";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_logo">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="error"
        />
        <button onClick={() => setSignIn(true)} className="btn-logo">
          Sign In
        </button>

        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>watch anywhere. Cancel anytime.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className="loginScreen_form">
              <form className="form-login">
                <input
                  className="input-form"
                  placeholder="your email"
                  type="email"
                />
                <button onClick={() => setSignIn(true)} className="btn-form">
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
