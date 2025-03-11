import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams(); // Get van ID from URL
  const [van, setVan] = useState(null);

  useEffect(() => {
    async function fetchVan() {
      try {
        let resp = await fetch(`/api/vans/${id}`);
        if (!resp.ok) {
          throw new Error("Failed to load van data");
        }
        let data = await resp.json();
        setVan(data.van); // Fix: Directly set "data" (MirageJS returns an object, not { van: {} })
      } catch (err) {
        console.error(err);
      }
    }
    fetchVan();
  }, [id]);

  if (!van) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <img
          src={van.imageUrl}
          alt={van.name}
          className="w-full h-auto rounded-lg shadow-md mb-6"
        />
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-4">
          {van.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <p className="text-xl font-semibold">
            <span className="font-bold">Price:</span> ${van.price}/day
          </p>
          <p className="text-xl font-semibold">
            <span className="font-bold">Type:</span> {van.type}
          </p>
        </div>
        <p className="mt-6 text-lg text-justify text-gray-200 border-t-2 border-gray-500 pt-4">
          {van.description}
        </p>
      </div>
    </div>
  );
}

export default Details;
