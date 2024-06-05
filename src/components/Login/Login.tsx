import React from "react";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <body className="d-flex justify-content-center main-dark-background min-vh-100">
      <section className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="DMSans main-ligth-text fw-bold mb-2">Welcome</h1>
        <h6 className="text-center Epilogue main-ligth-text fw-light w-75 mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h6>
        <form className="d-flex flex-column">
          <div className="full-input secondary-dark-background rounded-4 px-3 mb-2">
            <label htmlFor="email" className="main-ligth-text">User</label>
            <input
              name="email"
              type="email"
              className="secondary-dark-background border-0 main-ligth-text"
            />
          </div>
          <div className="full-input secondary-dark-background rounded-4 px-3 mb-3">
            <label htmlFor="password" className="main-ligth-text">Password</label>
            <input
              name="password"
              type="password"
              className="secondary-dark-background border-0 main-ligth-text"
            />
          </div>
          <a href="#" className="DMSans main-ligth-text forgot-pass mb-3 text-decoration-none">
            Forgot your password?
          </a>
          <a href="/signup" className="DMSans main-ligth-text forgot-pass mb-3 text-decoration-none">
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
    </body>
  );
};

export default Login;
