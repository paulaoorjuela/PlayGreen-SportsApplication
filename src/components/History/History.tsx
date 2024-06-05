import React from "react";
import Panel from "../../templates/Panel/Panel";
import SportCards from "../../templates/Sport-Cards/Sport-Cards";

const History: React.FC = () => {
  return (
    <body className="d-flex flex-column main-dark-background min-vh-100">
      <button className="main-dark-background me-auto mt-4 ms-4 border-0">
        <i className="fa-solid fa-arrow-left main-ligth-text"></i>
      </button>
      <div className="ms-4 mt-4 main-ligth-text mb-4">
        <h1 className="MDSans">History</h1>
        <h6 className="Epilogue fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
        <p className="date"></p>
      </div>
      <section>
        <SportCards></SportCards>
      </section>
      <Panel></Panel>
    </body>
  );
};

export default History;
