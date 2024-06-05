import React from "react";
import "./Sport-Cards.css";

const SportCards: React.FC = () => {
  return (
    <section className="d-flex secondary-dark-background rounded-4 sport-card mx-auto">
      <div className="sport-img rounded-4 d-flex align-items-center ps-3">
        <h4 className="DMSans main-ligth-text">Sport Name</h4>
      </div>
      <div className="d-flex align-items-center mx-auto">
        <i className="fa-solid fa-heart main-ligth-text fs-1"></i>
      </div>
    </section>
  );
};

export default SportCards;
