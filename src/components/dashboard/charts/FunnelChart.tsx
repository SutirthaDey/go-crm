"use client";

import { epilogue } from "@/ui/fonts";

const data = [
  { label: "Leads", value: 120, color: "#4E8AF4" }, // Bright blue (top)
  { label: "Calls", value: 100, color: "#6BA2F5" }, // Medium blue
  { label: "Follow-up", value: 60, color: "#FF9E5E" }, // Orange (transition)
  { label: "Conversion", value: 20, color: "#FFC154" }, // Yellow-orange
  { label: "Sale", value: 15, color: "#5DBB63" }, // Green (bottom)
];

export default function EqualTriangleFunnel() {
  const numSlices = data.length;
  const sliceHeight = 100 / numSlices;

  const slices = data.map((d, i) => {
    const h1 = i * sliceHeight;
    const h2 = h1 + sliceHeight;

    const halfWidthTop = 50 * (1 - h1 / 100);
    const halfWidthBottom = 50 * (1 - h2 / 100);

    return (
      <polygon
        key={i}
        points={`
          ${50 - halfWidthTop},${h1}
          ${50 + halfWidthTop},${h1}
          ${50 + halfWidthBottom},${h2}
          ${50 - halfWidthBottom},${h2}
        `}
        fill={d.color}
      />
    );
  });

  return (
    <div className="flex flex-col justify-between gap-8 p-6">
      <div className="flex items-center ">
        <p
          className={`${epilogue.className} text-2xl leading-6 font-bold text-[#171A1FFF]`}
        >
          Deal Funnel
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start">
        <div className="w-[60%] flex min-w-[150px]">
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="200"
            preserveAspectRatio="xMidYMid meet"
          >
            {slices}
          </svg>
        </div>
        <div className="space-y-6 text-sm w-[40%] min-w-[100px]">
          {data.map((d, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="flex items-center space-x-2">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: d.color }}
                ></span>
                <span>{d.label}</span>
              </span>
              <span>{d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
