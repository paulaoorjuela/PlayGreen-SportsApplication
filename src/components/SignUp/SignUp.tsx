import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./SignUp.css";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user information in Firestore
      if (user) {
        await setDoc(doc(firestore, "users", user.uid), {
          email: email,
          likes: [],
          dislikes: []
        });

        // Redirect to home page or any other page after successful signup
        navigate("/home");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <body className="d-flex justify-content-center main-dark-background min-vh-100">
      <section className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="DMSans main-ligth-text fw-bold mb-3">SignUp</h1>
        <h6 className="text-center Epilogue main-ligth-text fw-light w-75 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h6>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <div className="full-input secondary-dark-background rounded-4 px-3 mb-2">
            <label htmlFor="email" className="main-ligth-text">
              User
            </label>
            <input
              name="email"
              type="email"
              className="secondary-dark-background border-0 main-ligth-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="full-input secondary-dark-background rounded-4 px-3 mb-3">
            <label htmlFor="password" className="main-ligth-text">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="secondary-dark-background border-0 main-ligth-text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a
            href="/"
            className="DMSans main-ligth-text aready-have mb-3 text-decoration-none"
          >
            Already have an account?
          </a>
          <button
            type="submit"
            className="DMSans main-ligth-text blue-btn border-0 px-2"
          >
            SignUp
          </button>
        </form>
      </section>
    </body>
  );
};

export default SignUp;
