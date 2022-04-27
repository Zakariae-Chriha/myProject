import React, { useState, useEffect } from "react";
import "../styles/BooksListCommunity.css";
import axios from "axios";
import { Spinner } from "reactstrap";

import "react-toastify/dist/ReactToastify.min.css";
import BooksListCardCommunity from "../components/BooksListCardCommunity";
function BooksListCommunity() {
  //stats
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getAllBooks();
  }, []);
  // fetch
  const getAllBooks = () => {
    setLoading(true);

    axios
      .get("http://localhost:5000/read")
      .then((response) => {
        setCards(response.data);
        setLoading(false);
      })

      .catch((Error) => console.log(Error));
  };
  // Main Show Case
  const mainHeader = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        {/* Overlay */}
        <div className="filter"></div>
        <h1
          className="display-2 text-center text-white mb-3"
          style={{ zIndex: 2 }}
        >
          GIVE_AWAY Or sale
        </h1>
        <div style={{ width: "60%", zIndex: 2 }}></div>
      </div>
    );
  };
  const handleCards = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let userImage = "";
        if (item.imageLinks) {
          userImage = item.imageLinks.userImage;
        }

        return (
          <div className="col-lg-4 mb-3" key={item.id}>
            <BooksListCardCommunity
              userImage={userImage}
              title={item.title}
              authors={item.authors}
              description={item.description}
            />
          </div>
        );
      });
      return (
        <div className="container my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };
  return (
    <div className="w-100 h-100">
      {mainHeader()}
      {handleCards()}
    </div>
  );
}

export default BooksListCommunity;
