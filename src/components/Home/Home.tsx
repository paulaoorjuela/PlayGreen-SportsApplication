import React from "react";
import "./Home.css";
import Panel from "../../templates/Panel/Panel"

const Home: React.FC = () => {
  return (
    <body className="d-flex flex-column main-dark-background min-vh-100">
      <section className="bg-image w-100 d-flex align-items-end mb-5 flex-column">
        <button className="me-auto ms-4 mt-4 main-dark-background border-0 rounded-2 py-2 px-3"><i className="fa-solid fa-sun main-ligth-text"></i></button>
        <h2 className="DMSans main-ligth-text me-auto mt-auto ms-4 mb-4">Sport Name</h2>
      </section>
      <div className="mx-auto d-flex justify-content-center align-items-center mb-5">
        <button className="rounded-circle secondary-dark-background x-btn me-4 border-0">
          <i className="fa-solid fa-xmark main-ligth-text fs-3"></i>
        </button>
        <button className="rounded-circle blue-btn border-0">
          <i className="fa-solid fa-heart main-ligth-text fs-1"></i>
        </button>
      </div>
      <Panel></Panel>
    </body>
  );
};

export default Home;
