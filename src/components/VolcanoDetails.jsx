import React from "react";
import VolcanoDetailsItem from "./VolcanoDetailsItem";
import VolcanoMap from "./VolcanoMap";

export default function VolcanoDetails({ volcano }) {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {volcano.name} is located in {volcano.subregion}, {volcano.region} of{" "}
        {volcano.country}.
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <VolcanoDetailsItem
          title="Last Eruption"
          value={volcano.last_eruption}
        />
        <VolcanoDetailsItem title="Summit" value={volcano.summit} />
        <VolcanoDetailsItem title="Elevation" value={volcano.elevation} />
      </dl>

      <div className="mt-5">
        <VolcanoMap latitude={volcano.latitude} longitude={volcano.longitude} />
      </div>
    </div>
  );
}
