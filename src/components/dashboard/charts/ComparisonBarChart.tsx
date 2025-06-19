"use client";

import { epilogue } from "@/ui/fonts";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: [
    "2025-09-01",
    "2025-09-02",
    "2025-09-03",
    "2025-09-04",
    "2025-09-05",
    "2025-09-06",
    "2025-09-07",
    "2025-09-08",
  ],
  datasets: [
    {
      label: "Revenue ($)",
      data: [5200, 6300, 4800, 7500, 6800, 7200, 5900, 7000],
      backgroundColor: "#4E8AF4", // Indigo
      yAxisID: "y-revenue",
    },
    {
      label: "Leads",
      data: [130, 150, 120, 200, 170, 190, 160, 210],
      backgroundColor: "#F59E0B", // Amber
      yAxisID: "y-leads",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          const label = context.dataset.label;
          const value = context.raw;
          return label === "Revenue ($)"
            ? `${label}: $${value.toLocaleString()}`
            : `${label}: ${value} leads`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        font: {
          weight: "bold",
        },
      },
    },
    "y-revenue": {
      type: "linear",
      position: "left",
      title: {
        display: true,
        text: "Revenue ($)",
        font: {
          weight: "bold",
        },
      },
      ticks: {
        stepSize: undefined, // Let Chart.js calculate
        maxTicksLimit: 5, // <-- Limit to at most 5 Y-ticks
        callback: (value: number) => `$${value}`, // for revenue
      },
    },
    "y-leads": {
      type: "linear",
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: "Number of Leads",
        font: {
          weight: "bold",
        },
      },
      ticks: {
        stepSize: undefined,
        maxTicksLimit: 5,
        callback: (value: number) => `${value} leads`,
      },
    },
  },
};

export default function RevenueVsLeadsByDateChart() {
  return (
    <div className="flex flex-col justify-between gap-10">
      <div>
        <h2
          className={`${epilogue.className} text-2xl leading-6 font-bold text-[#171A1FFF] mt-6 ml-6`}
        >
          Revenue vs Leads
        </h2>
      </div>
      <div className="flex justify-center">
        <Bar data={data} options={options} height={250} width={710} />
      </div>
    </div>
  );
}
