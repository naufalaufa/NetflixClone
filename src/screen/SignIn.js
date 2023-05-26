import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../firebase";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();

    const user = await auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.meesage);
      });

    console.log(user);
  };

  const signIn = async (e) => {
    e.preventDefault();

    const user = await auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.meesage));
    console.log(user  );
  };

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <form>
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button onClick={signIn}>GET STARTED</button>
        <h6>
          <span className="color-green">New To Netflix ?</span>

          <span onClick={register} className="sign-up-h6">
            {" "}
            Sign Up Now
          </span>
        </h6>
      </form>
    </div>
  );
}

export default SignIn;
