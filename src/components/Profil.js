import React from "react";
import "../styles/Profil.css";
import { Link } from "react-router-dom";
function Profil() {
  return (
    <div class="Profil ">
      <details>
        <div className="Profil">
          <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g" />
        </div>
        <summary></summary>
        <nav class="menu">
          <Link to="/AddBook">
            <a href="/AddBook">Add Books</a>
          </Link>
          <Link to="/MyBooks">
            <a href="#link">my Books</a>
          </Link>
          <Link to="/Contact">
            <a href="#link">Contact</a>
          </Link>
          <a href="#link">log out</a>
        </nav>
      </details>
    </div>
  );
}

export default Profil;
