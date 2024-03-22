import React from "react";
import PopulatedWithinBar from "./PopulatedWithinBar";
import PopulatedWithinRadar from "./PopulatedWithinRadar";

export default function PopulatedWithin({ populatedWithin }) {
  return (
    <div className="mt-10">
      <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
        Populated Within
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Population within a certain distance of the volcano.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-10 mt-10">
        <div className="col-span-full md:col-span-1">
          <p className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl mb-2">
            Bar Chart
          </p>

          <PopulatedWithinBar populatedWithin={populatedWithin} />

          <p className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl mt-10 mb-2">
            Table
          </p>
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Distance
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Population
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {populatedWithin.map((item) => (
                <tr key={item.label}>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.label}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-full md:col-span-1">
          <p className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl mb-2">
            Radar Chart
          </p>

          <PopulatedWithinRadar populatedWithin={populatedWithin} />
        </div>
      </div>
    </div>
  );
}
