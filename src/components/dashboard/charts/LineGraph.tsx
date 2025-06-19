"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { epilogue } from "@/ui/fonts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    title: false,
  },
  scales: {
    y: {
      ticks: {
        padding: 15, // ✅ adds space between labels and graph
        callback: function (value) {
          return `$${value.toLocaleString()}`;
        },
      },
    },
  },
};

export const data = {
  labels: ["May", "June", "July", "Aug", "Sep"],
  datasets: [
    {
      label: "Dataset 1",
      data: [20000, 12000, 28000, 2500, 12000],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      spanGaps: true,
    },
  ],
};

export function LineGraph() {
  return (
    <div className="flex flex-col justify-between gap-5">
      <div>
        <h2
          className={`${epilogue.className} text-2xl leading-6 font-bold text-[#171A1FFF] mt-6 ml-6`}
        >
          Profits
        </h2>
      </div>
      <div className="flex justify-center max-h-[340px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
