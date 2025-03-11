import React from "react";

function About() {
  return (
    <div
      className="w-100 d-flex flex-column justify-content-around align-items-center bg-dark text-white p-0 "
      style={{ width: "100vw", marginLeft: "4px", marginRight: "4px" }}
    >
      <figure
        style={{
          objectFit: "cover",
          width: "100%",
        }}
      >
        <img
          src="./src/assets/image 55.png"
          alt="Vanlife camper under the stars"
          style={{ width: "100%", height: "100%" }}
        />
      </figure>

      <section
        style={{
          height: "auto", // Let it grow based on content
          width: "100%",
        }}
        className="d-flex flex-column justify-content-around align-items-center m-0 p-0"
      >
        <h1 className="d-flex justify-content-center align-items-center mt-2 mb-2">
          Don’t squeeze in a sedan <br /> when you could relax in a van.
        </h1>

        <p
          style={{
            textAlign: "center",
            width: "45%",
          }}
        >
          Our mission is to enliven your road trip with the perfect travel
          <br /> van rental. Our vans are recertified before each trip to ensure
          <br />
          your travel plans can go off without a hitch. <br /> (Hitch costs
          extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who knows firsthand the <br />
          magic of touring the world on the 4 wheels.
        </p>

        <div
          style={{
            width: "45%",
            background: "#FFCC8D",
            marginBottom: "20px",
          }}
          className="d-flex flex-column justify-content-around align-items-center w-60 py-3"
        >
          <h2 style={{ fontSize: "1.6rem" }}>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <button className="btn btn-dark rounded-2">Explore our vans</button>
        </div>
      </section>
    </div>
  );
}

export default About;
