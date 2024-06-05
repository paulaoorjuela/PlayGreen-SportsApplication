import React, { useEffect, useState } from "react";
import { useAuth } from "../authentication/authContext";
import { fetchApi } from "../../api";
import { firestore } from "../../firebase";
import { collection, doc, updateDoc, arrayUnion } from "firebase/firestore";
import "./Home.css";
import Panel from "../../templates/Panel/Panel";

interface Sport {
  idSport: string;
  strSport: string;
  strSportThumb: string;
}

const Home: React.FC = () => {
  const { user: currentUser } = useAuth();
  const [sports, setSports] = useState<Sport[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSportsInfo = async () => {
      try {
        const sportsData = await fetchApi(sports.map(sport => sport.idSport));
        if (Array.isArray(sportsData)) {
          setSports(sportsData);
        } else if (sportsData && sportsData.sports && Array.isArray(sportsData.sports)) {
          // Handle case where data has a nested structure
          setSports(sportsData.sports);
        } else {
          console.error("Unexpected data format:", sportsData);
          setError("Unexpected data format");
        }
      } catch (error) {
        console.error("Failed to fetch sports info:", error);
        setError("Failed to fetch sports info");
      } finally {
        setLoading(false);
      }
    };

    getSportsInfo();
  }, []);

  const handleDislike = async (sportId: string) => {
    if (!currentUser) return;
    try {
      await updateDoc(doc(collection(firestore, "users"), currentUser.uid), {
        dislikes: arrayUnion(sportId),
      });
    } catch (error) {
      console.error("Error updating dislikes:", error);
    }
  };

  const handleLike = async (sportId: string) => {
    if (!currentUser) return;
    try {
      await updateDoc(doc(collection(firestore, "users"), currentUser.uid), {
        likes: arrayUnion(sportId),
      });
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="d-flex flex-column main-dark-background min-vh-100">
      <div id="sportCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {sports.map((sport, index) => (
            <div
              key={sport.idSport}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <section
                className="bg-image w-100 d-flex align-items-end mb-5 flex-column"
                style={{ backgroundImage: `url('${sport.strSportThumb}')`, height: "80vh" }}
              >
                <button className="me-auto ms-4 mt-4 main-dark-background border-0 rounded-2 py-2 px-3">
                  <i className="fa-solid fa-sun main-ligth-text"></i>
                </button>
                <h2 className="DMSans main-ligth-text me-auto mt-auto ms-4 mb-4">
                  {sport.strSport}
                </h2>
              </section>
              <div className="mx-auto d-flex justify-content-center align-items-center mb-5">
                  <button
                    className="rounded-circle secondary-dark-background x-btn me-4 border-0"
                    onClick={() => handleDislike(sport.idSport)}
                  >
                    <i className="fa-solid fa-xmark main-ligth-text fs-3"></i>
                  </button>
                  <button
                    className="rounded-circle like-btn border-0"
                    onClick={() => handleLike(sport.idSport)}
                  >
                    <i className="fa-solid fa-heart main-ligth-text fs-1"></i>
                  </button>
                </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#sportCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#sportCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Panel />
    </main>
    // <main className="d-flex flex-column main-dark-background min-vh-100">
    //   {sports.map((sport) => (
    //     <section
    //       key={sport.idSport}
    //       className="bg-image w-100 d-flex align-items-end mb-5 flex-column"
    //       style={{ backgroundImage: `url('${sport.strSportThumb}')` }}
    //     >
    //       <button className="me-auto ms-4 mt-4 main-dark-background border-0 rounded-2 py-2 px-3">
    //         <i className="fa-solid fa-sun main-ligth-text"></i>
    //       </button>
    //       <h2 className="DMSans main-ligth-text me-auto mt-auto ms-4 mb-4">
    //         {sport.strSport}
    //       </h2>
    //     </section>
    //   ))}
    //   <div className="mx-auto d-flex justify-content-center align-items-center mb-5">
    //     <button
    //       className="rounded-circle secondary-dark-background x-btn me-4 border-0"
    //       onClick={() => handleDislike(sports[0]?.idSport)}
    //     >
    //       <i className="fa-solid fa-xmark main-ligth-text fs-3"></i>
    //     </button>
    //     <button
    //       className="rounded-circle like-btn border-0"
    //       onClick={() => handleLike(sports[0]?.idSport)}
    //     >
    //       <i className="fa-solid fa-heart main-ligth-text fs-1"></i>
    //     </button>
    //   </div>
    //   <Panel></Panel>
    // </main>
  );
};

export default Home;
