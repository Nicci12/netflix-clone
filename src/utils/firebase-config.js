import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMDdUdGw8hyaUPVaCkLYEPDGPkAK6deXY",
  authDomain: "react-netflix-clone-597c4.firebaseapp.com",
  projectId: "react-netflix-clone-597c4",
  storageBucket: "react-netflix-clone-597c4.appspot.com",
  messagingSenderId: "794294374026",
  appId: "1:794294374026:web:dc0dc007f9a4645615a773",
  measurementId: "G-XT4V5GCD38"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)