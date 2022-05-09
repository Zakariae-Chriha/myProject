import React, { useState } from "react";

function Dialoge() {
  const [dialog, setDialog] = useState("");
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(50%,-50%)",
          padding: "50px",
          background: "white",
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          {}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <button
            style={{
              backgroundColor: "red",
            }}
          >
            Yes
          </button>
          <button
            style={{
              backgroundColor: "green",
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialoge;
