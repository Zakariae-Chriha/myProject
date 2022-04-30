import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
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
          <div className="group col d-flex justify-content-center ">
            <Link to="/Bookgoogle">
              <button type="button">Read Books For Free</button>
            </Link>
          </div>
          <div className="group col d-flex justify-content-center">
            {" "}
            <Link to="/BooksListCommunity">
              <button>Give-away OR Sale</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
