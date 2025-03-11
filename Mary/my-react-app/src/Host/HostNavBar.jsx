import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#C26464FF",
  };

  return (
    <header
      style={{
        border: "2px solid blue",
        height: "10vh",
        backgroundColor: "white",
      }}
    >
      <NavLink
        to="/host"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Dashbord
      </NavLink>

      <NavLink
        to="income"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Income
      </NavLink>

      <NavLink
        to="van"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Van
      </NavLink>
      <NavLink
        to="review"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Review
      </NavLink>
    </header>
  );
}
export default NavBar;
