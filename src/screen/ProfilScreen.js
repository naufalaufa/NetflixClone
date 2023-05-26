import React from "react";
import "./ProfilScreen.css";
import Nav from "../Nav";
import NetflixLogo from "../images/profil-image.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function ProfilScreen() {
  const user = useSelector(selectUser);

  console.log(user);

  return (
    <div className="ProfilScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profilScreen__info">
          <img src={NetflixLogo} alt="error" />
          <div className="profilScreen__detail">
            <h2 style={{ color: "white" }}>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreem__signOut"
              >
                Sign Out
              </button>

              <div className="profilDev">
                <Link to="https://wa.me/085156802452">
                  <FaWhatsappSquare
                    className="whatsapp"
                    style={{
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      marginTop: "10px",
                      // backgroundColor: "white",
                      color: "white",
                      marginLeft: "5px",
                    }}
                  />
                </Link>

                <Link to="https://www.instagram.com/naufallrifqiii">
                  <BsInstagram
                    className="instagram"
                    style={{
                      width: "40px",
                      height: "38px",
                      // backgroundColor: "white",
                      // borderRadius: "100%",
                      marginLeft: "5px",
                      color: "white",
                    }}
                  />
                </Link>

                <Link to="https://github.com/naufalaufa">
                  <AiFillGithub
                    className="github"
                    style={{
                      width: "40px",
                      height: "40px",
                      marginLeft: "5px",
                      color: "white",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilScreen;
