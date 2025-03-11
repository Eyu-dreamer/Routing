import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-100 h-100 d-flex justify-content-center align-items-center bg-light">
      <Link to="/" className="w-50 ms-4">
        #vanlife
      </Link>

      <span className="w-50 d-flex justify-content-around align-items-center">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/host">Host</Link>
      </span>
    </nav>
  );
}

export default NavBar;
