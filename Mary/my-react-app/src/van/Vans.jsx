import React, { useState, useEffect } from "react";
import {
  Link,
  Outlet,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get("type");

  useEffect(() => {
    async function fetchVans() {
      try {
        const resp = await fetch("/api/vans");
        if (!resp.ok) {
          throw new Error("Failed to fetch vans");
        }
        const data = await resp.json();
        if (filterType) {
          setVans(
            data.vans.filter(
              (van) => van.type.toLowerCase() === filterType.toLowerCase()
            )
          );
        } else {
          setVans(data.vans);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchVans();
  }, [filterType]); // Re-run the effect when filterType changes

  const vanCards =
    vans.length === 0 ? (
      <p className="text-center text-white">Loading...</p>
    ) : (
      vans.map((van) => (
        <div
          key={van.id}
          className="col-md-4 mb-4 mx-auto"
          onClick={() => navigate(`/details/${van.id}`)}
        >
          <div className="card shadow-lg text-center bg-dark text-white">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="card-img-top"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{van.name}</h5>
              <p className="card-text">${van.price}/day</p>
              <span className="badge bg-success text-white fs-6">
                {van.type}
              </span>
            </div>
          </div>
        </div>
      ))
    );

  return (
    <div className="container py-5">
      <nav className="navbar navbar-expand-lg bg-white shadow rounded mb-4 p-3">
        <div className="container d-flex justify-content-center">
          <div className="navbar-nav d-flex flex-row gap-4">
            {["simple", "luxury", "rugged"].map((type) => (
              <Link
                key={type}
                className={`nav-link text-dark fw-bold ${
                  filterType === type ? "active" : ""
                }`}
                to={`?type=${type}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Link>
            ))}
            <Link className="nav-link text-danger fw-bold" to="/vans">
              Clear Filter
            </Link>
          </div>
        </div>
      </nav>

      <h1 className="text-center text-white mb-4">Explore Your Van Options</h1>

      <div className="row justify-content-center">
        <Outlet />
        {vanCards}
      </div>
    </div>
  );
}

export default Vans;
