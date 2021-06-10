import firebase from "firebase";
import "firebase/auth";

const firebaseConfif = {
  apiKey: "AIzaSyAPp7JuP7vNqoJase0kt2fnEuFyu9wXmrI",
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfif);
export const auth = firebase.auth();
export const db = firebase.firestore();


