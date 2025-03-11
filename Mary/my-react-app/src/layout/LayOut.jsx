import React from "react";
import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 w-100 p-0 m-0">
      {/* Fixed header height */}
      <header style={{ height: "15vh" }} className="p-0 m-0 w-100 bg-light">
        <NavBar />
      </header>

      {/* Main content with flexible growth */}
      <main
        className="w-100 p-0 m-0 bg-dark"
        style={{ minHeight: "75vh", width: "100%" }}
      >
        <Outlet />
      </main>

      {/* Fixed footer height */}
      <footer style={{ height: "10vh" }} className="bg-light">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
