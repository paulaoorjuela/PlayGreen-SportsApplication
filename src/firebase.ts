import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGbv8vinyzrLvrZrGYgrlvxQzmMsL9LjY",
  authDomain: "playgreen---sports-application.firebaseapp.com",
  projectId: "playgreen---sports-application",
  storageBucket: "playgreen---sports-application.appspot.com",
  messagingSenderId: "1052880669182",
  appId: "1:1052880669182:web:937c94fd3ffed8e18d18af",
  measurementId: "G-XXDD3W6LBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
