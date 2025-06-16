"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { epilogue } from "@/ui/fonts";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = [
  { label: "Leads", value: 120, color: "#4E8AF4" },
  { label: "Proposal", value: 100, color: "#FFC154" },
  { label: "Negotiations", value: 60, color: "#5DBB63" },
  { label: "Contracts Sent", value: 20, color: "#FF9E5E" },
  { label: "Won", value: 20, color: "#14B8A6" }, // Teal
  { label: "Lost", value: 20, color: "#9CA3AF" }, // Gray
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

export default function DoughnutChart() {
  return (
    <div className="flex flex-col justify-between gap-8 p-6">
      <div className="flex items-center ">
        <p
          className={`${epilogue.className} text-2xl leading-6 font-bold text-[#171A1FFF]`}
        >
          Opportunity Stage
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start">
        <div className="w-[60%] flex min-w-[150px]">
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

        {/* Custom Legend */}
        <div className="space-y-6 text-sm w-[40%] min-w-[100px]">
          {chartData.map((d, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: d.color }}
                ></span>
                <span>{d.label}</span>
              </span>
              <span className="font-medium">{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
