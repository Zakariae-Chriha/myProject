import React from "react";
import { Link } from "react-router-dom";

function Profil() {
  return (
    <div className="image-profil ">
      <div>
        <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g" alt="" />
        <select>
          <option>
            <Link to="/AddBook">
              <a href="#" >AddBook</a>
            </Link>
          </option>
          <option>
            <a href="">my Books</a>
          </option>
          <option>
            <a href="">log out</a>
          </option>
          <option>
            <Link to="/Contact">Contact</Link>
          </option>
        </select>
      </div>
    </div>
  );
}

export default Profil;
