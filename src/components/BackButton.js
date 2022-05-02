import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function BackButton() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/profil");
  };
  return (
    <div className="backButton">
      <button onClick={handleClick}>
        <ArrowBackIcon />
        BACK
      </button>
    </div>
  );
}

export default BackButton;
