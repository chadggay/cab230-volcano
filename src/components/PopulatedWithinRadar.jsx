import React from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function PopulatedWithinRadar({ populatedWithin }) {
  const data = {
    labels: populatedWithin.map((item) => item.label),
    datasets: [
      {
        label: "Population within km",
        data: populatedWithin.map((item) => item.value),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={data} />;
}
