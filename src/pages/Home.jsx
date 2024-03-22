import React from "react";
import VolcanoSwiper from "../components/VolcanoSwiper";

export default function Home() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Volcano Explorer
      </h1>

      <p className="mt-4 text-base text-gray-500">
        Volcanoes are Earth's geologic architects. They've created more than 80
        percent of our planet's surface, laying the foundation that has allowed
        life to thrive. Their explosive force crafts mountains as well as
        craters.
      </p>

      <div className="mt-8">
        <VolcanoSwiper />
      </div>
    </div>
  );
}
