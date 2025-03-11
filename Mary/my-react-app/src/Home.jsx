import React from "react";
import "./Home.css";

function Home() {
  return (
    <div
      className="home d-flex flex-column  justify-content-between align-items-center text-white"
      style={{ minHeight: "75vh" }}
    >
      <h1 className="text-center mt-5" style={{ marginTop: "200px" }}>
        You got the travel plans. We <br /> got the travel Vans.
      </h1>

      <p className="text-center fs-4 mt-n4">
        Add adventure into your life by joining the #vanlife movement. <br />
        Rent the perfect van to make the perfect ride.
      </p>

      <button
        className="btn"
        style={{
          border: "2px solid transparent",
          backgroundColor: "orangered",
          width: "400px",
          fontSize: "1.4rem",
          color: "whitesmoke",
          marginTop: "-25px",
          marginBottom: "50px",
        }}
      >
        Find your van
      </button>
    </div>
  );
}

export default Home;
