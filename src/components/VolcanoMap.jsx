import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

export default function VolcanoMap({ latitude, longitude }) {
  const [centre] = useState([parseFloat(latitude), parseFloat(longitude)]);

  return (
    <>
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Volcano Location
      </h2>
      <p className="text-sm font-medium text-gray-500">
        Latitude: {latitude}, Longitude: {longitude}
      </p>
      <div className="mt-5" style={{ height: "40vh", width: "100%" }}>
        <Map center={centre} defaultZoom={10}>
          <Marker width={50} anchor={centre} />
        </Map>
      </div>
    </>
  );
}
