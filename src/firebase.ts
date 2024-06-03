import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGbv8vinyzrLvrZrGYgrlvxQzmMsL9LjY",
  authDomain: "playgreen---sports-application.firebaseapp.com",
  projectId: "playgreen---sports-application",
  storageBucket: "playgreen---sports-application.appspot.com",
  messagingSenderId: "1052880669182",
  appId: "1:1052880669182:web:937c94fd3ffed8e18d18af",
  measurementId: "G-XXDD3W6LBX"
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export default firebase;

