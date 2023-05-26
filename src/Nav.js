import React, { useEffect, useState } from "react";
import "./Nav.css";
import NetflixLogo from "./images/netflix-transparent.png";
import ProfilImage from "./images/profil-image.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-content">
        <img
          onClick={() => navigate("/")}
          className="nav-logo"
          src={NetflixLogo}
          alt="error"
          style={{ cursor: "pointer" }}
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav-avatar"
          src={ProfilImage}
          alt="error"
        />
      </div>
    </div>
  );
}

export default Nav;
