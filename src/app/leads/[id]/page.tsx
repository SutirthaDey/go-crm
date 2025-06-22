"use client";

import Stages from "@/components/Leads/Stages";
import Tabs from "@/components/Leads/Tabs";
import Title from "@/components/Leads/Title";
import { epilogue } from "@/ui/fonts";
import { Ban, CircleCheckBig, EllipsisVertical } from "lucide-react";
import { useState } from "react";

export default function LeadDetails() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="h-screen">
      <div className="flex justify-between flex-wrap">
        <p
          className={`${epilogue.className} text-[#171A1FFF] font-bold text-[32px] leading-12`}
        >
          Lead Details
        </p>
        <div className="flex flex-wrap sm:justify-end gap-4 items-center">
          <button className="bg-[#EEFDF3FF] text-[#117B34FF] hover:bg-[#B8F5CDFF] hover:text-[#117B34FF] font-[400] rounded-sm text-xs h-8 w-32 py-2 flex justify-center items-center gap-2">
            <CircleCheckBig height={14} width={14} />
            <p>Close as Won</p>
          </button>
          <button className="bg-[#F3F4F6FF] text-[#565E6CFF] hover:bg-[#DEE1E6FF] hover:text-[#565E6CFF]  font-[400] rounded-sm text-xs h-8 w-32 py-2 flex justify-center items-center gap-2">
            <Ban height={14} width={14} />
            <p>Close as Lost</p>
          </button>
          <div className="bg-[#F3F4F6FF] p-2 text-gray-500 hover:bg-[#DCE6FBFF]">
            <EllipsisVertical height={14} width={14} />
          </div>
        </div>
      </div>

      <Stages />

      <Title />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
