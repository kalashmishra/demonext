import React from "react";
import "@/public/Style/loader.css"

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="loader"></div>
    </div>
  );
}

export default Loader;

