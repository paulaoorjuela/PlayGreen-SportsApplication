import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Panel.css";

const Panel: React.FC = () => {
  const location = useLocation();

  return (
    <section className="d-flex flex-row justify-content-between align-items-center secondary-dark-background rounded-4 panel mt-auto mx-auto mb-4 px-4">
      <Link to="/home">
        <button
          className={`border-0 rounded-4 p-3 ${
            location.pathname === '/home' ? 'main-dark-background' : 'secondary-dark-background'
          }`}
        >
          <i className="fa-solid fa-house text-secondary fs-4"></i>
        </button>
      </Link>
      <Link to="/history">
        <button
          className={`border-0 rounded-4 p-3 ${
            location.pathname === '/history' ? 'main-dark-background' : 'secondary-dark-background'
          }`}
        >
          <i className="fa-solid fa-clock text-secondary fs-4"></i>
        </button>
      </Link>
      <button className="secondary-dark-background border-0 rounded-4 p-3">
        <i className="fa-solid fa-arrow-right-from-bracket text-secondary fs-4"></i>
      </button>
    </section>
  );
};

export default Panel;
