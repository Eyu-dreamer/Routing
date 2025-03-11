import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function FilteredVan() {
  const [vans, setVans] = useState([]);
  const navigate = useNavigate();
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
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (filterType) {
      fetchVans();
    }
  }, [filterType]);

  return (
    <div className="row">
      {vans.length === 0 ? (
        <p className="text-center text-white">No vans found for this filter.</p>
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
      )}
    </div>
  );
}
export default FilteredVan;
