import React from "react";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home-image d-flex justify-content-center align-items-center flex-column">
      {/* Overlay */}
      <div className="filter"></div>
      <h1
        className="display-2 text-center text-white mb-3"
        style={{ zIndex: 2 }}
      >
        Community Books
      </h1>
      <div style={{ width: "60%", zIndex: 2 }}>
        <div className="row ">
          <div className="col">
            <button>Ried Books for free</button>
          </div>
          <div className="col ">
            <button>Give away OR Sale</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
