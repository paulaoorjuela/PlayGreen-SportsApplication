import React, { useEffect, useState } from "react";
import { useAuth } from "../authentication/authContext";
import { firestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Panel from "../../templates/Panel/Panel";
import { useNavigate } from "react-router-dom";
import "./History.css";

interface Sport {
  idSport: string;
  strSport: string;
  strSportThumb: string;
}

const History: React.FC = () => {
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();
  const [likedSports, setLikedSports] = useState<Sport[]>([]);
  const [dislikedSports, setDislikedSports] = useState<Sport[]>([]);

  useEffect(() => {
    const fetchUserSports = async () => {
      if (!currentUser) return;
      try {
        const userDoc = await getDoc(doc(firestore, "users", currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const likes = userData.likes || [];
          const dislikes = userData.dislikes || [];

          // Assuming likes and dislikes are already in the correct format
          setLikedSports(likes);
          setDislikedSports(dislikes);
        }
      } catch (error) {
        console.error("Error fetching user sports:", error);
      }
    };

    fetchUserSports();
  }, [currentUser]);

  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <main className="d-flex flex-column main-dark-background min-vh-100 main-history-page">
      <button
        className="main-dark-background me-auto mt-4 ms-4 border-0"
        onClick={handleGoBack}
      >
        <i className="fa-solid fa-arrow-left main-ligth-text"></i>
      </button>
      <div className="ms-4 mt-4 main-ligth-text mb-4">
        <h1 className="MDSans">History</h1>
        <h6 className="Epilogue fw-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h6>
        <p className="date"></p>
      </div>
      <div>
        {likedSports.map((sport) => (
          <section
            key={sport.idSport}
            className="d-flex secondary-dark-background rounded-4 sport-card mx-auto mb-3"
          >
            <div
              className="sport-img rounded-4 d-flex align-items-center ps-3"
              style={{ backgroundImage: `url('${sport.strSportThumb}')` }}
            >
              <h4 className="DMSans main-ligth-text">{sport.strSport}</h4>
            </div>
            <div className="d-flex align-items-center mx-auto">
              <i className="fa-solid fa-heart main-ligth-text fs-1"></i>
            </div>
          </section>
        ))}
      </div>
      <div>
        {dislikedSports.map((sport) => (
          <section
            key={sport.idSport}
            className="d-flex secondary-dark-background rounded-4 sport-card mx-auto mb-3"
          >
            <div
              className="sport-img rounded-4 d-flex align-items-center ps-3"
              style={{ backgroundImage: `url('${sport.strSportThumb}')` }}
            >
              <h4 className="DMSans main-ligth-text">{sport.strSport}</h4>
            </div>
            <div className="d-flex align-items-center mx-auto">
              <i className="fa-solid fa-xmark text-danger fs-1"></i>
            </div>
          </section>
        ))}
      </div>
      <Panel />
    </main>
  );
};

export default History;