"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = [
  { label: "Negotiations", value: 80, color: "#5DBB63" },
  { label: "Lost", value: 20, color: "#F3F4F6" }, // Gray
];

const data = {
  labels: chartData.map((d) => d.label),
  datasets: [
    {
      label: "Funnel Values",
      data: chartData.map((d) => d.value),
      backgroundColor: chartData.map((d) => d.color),
      borderWidth: 1,
    },
  ],
};

export default function LeadScoreChart() {
  return (
    <div className="w-[50%] flex min-w-[100px] h-[150px] justify-center">
      <Doughnut
        data={data}
        options={{
          cutout: "70%",
          plugins: {
            legend: { display: false },
          },
        }}
      />
    </div>
  );
}
