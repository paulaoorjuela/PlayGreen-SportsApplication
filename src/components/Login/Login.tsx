import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Adjust the import path as needed
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Authenticate user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Redirect to home
      if (user) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <main className="d-flex justify-content-center main-dark-background min-vh-100">
      <section className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="DMSans main-ligth-text fw-bold mb-2">Welcome</h1>
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
            href="#"
            className="DMSans main-ligth-text forgot-pass mb-3 text-decoration-none"
          >
            Forgot your password?
          </a>
          <a
            href="/signup"
            className="DMSans main-ligth-text forgot-pass mb-3 text-decoration-none"
          >
            Don't have an account yet?
          </a>
          <button
            type="submit"
            className="DMSans main-ligth-text blue-btn border-0 px-2"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
