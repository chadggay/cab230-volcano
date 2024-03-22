import React, { useState } from "react";
import ListPlaceholder from "../components/ListPlaceholder";
import VolcanoesGrid from "../components/VolcanoesGrid";
import { useCountries } from "../hooks/useCountries";
import { useVolcanoes } from "../hooks/useVolcanoes";

export default function Volcanoes() {
  const [selectedPopulatedWithin, setSelectedPopulatedWithin] = useState();
  const [selectedCountry, setSelectedCountry] = useState("Algeria");

  const { countries, loading, error } = useCountries();
  const { volcanoes } = useVolcanoes(selectedCountry, selectedPopulatedWithin);

  const populatedWithinOptions = [
    { value: "", title: "All" },
    { value: "5km", title: "5km" },
    { value: "10km", title: "10km" },
    { value: "30km", title: "30km" },
    { value: "100km", title: "100km" },
  ];

  const handlePopulatedWithinChange = (event) => {
    setSelectedPopulatedWithin(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Volcano Explorer
        </h1>
        <p className="mt-2 text-base text-gray-500">
          Explore volcanoes around the world. Select a country and a populated
          area within which to search for volcanoes.
        </p>
      </div>

      {!loading && countries.length ? (
        <>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <select
                id="location"
                name="location"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={countries[0]}
                onChange={handleCountryChange}
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Populated Within
              </label>
              <select
                id="location"
                name="location"
                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={populatedWithinOptions[0].value}
                onChange={handlePopulatedWithinChange}
              >
                {populatedWithinOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <VolcanoesGrid volcanoes={volcanoes} />
        </>
      ) : (
        <div className="mt-10 w-full">
          <ListPlaceholder />
        </div>
      )}
    </div>
  );
}
