import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBX1pBTUOisXtahIfdPe1IY2xyPaFSMHOA",
  authDomain: "netflix-clone-naufal.firebaseapp.com",
  projectId: "netflix-clone-naufal",
  storageBucket: "netflix-clone-naufal.appspot.com",
  messagingSenderId: "67581738369",
  appId: "1:67581738369:web:80ddf4aa741992f3e0bc80",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();

export { auth };
export default db;
