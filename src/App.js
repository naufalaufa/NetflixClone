import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";
import ProfilScreen from "./screen/ProfilScreen";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfilScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/test" />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
