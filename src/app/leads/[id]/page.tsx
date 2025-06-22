"use client";

import UpcomingMeetings from "@/components/dashboard/UpcomingMeetings";
import LeadScoreChart from "@/components/Leads/LeadScoreChart";
import Stages from "@/components/Leads/Stages";
import Summary from "@/components/Leads/Summary";
import Tabs from "@/components/Leads/Tabs";
import Title from "@/components/Leads/Title";
import { epilogue } from "@/ui/fonts";
import {
  Ban,
  Check,
  CircleCheckBig,
  EllipsisVertical,
  TrendingUp,
  X,
} from "lucide-react";
import Link from "next/link";
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

      <div className="w-full flex-wrap md:flex-nowrap flex py-3 gap-4">
        <Summary />
        <div className="flex flex-col min-w-1/2 gap-4">
          <div className="border-2 rounded-sm border-gray-100 pt-1">
            <UpcomingMeetings />
          </div>
          <div className="border-2 rounded-sm border-gray-100 p-6 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <p
                className={`${epilogue.className} font-bold text-2xl leading-5 tex-[#171A1FFF]`}
              >
                Lead Score
              </p>
              <Link href="/leads/" className="text-blue-500 hover:underline">
                View details
              </Link>
            </div>
            <div className="w-full flex gap-3">
              <div className="flex flex-col w-1/2 justify-center items-center gap-4">
                <LeadScoreChart />
                <div className="text-[#5DBB63]">
                  <TrendingUp className="inline-block mr-2" />
                  <p className="inline-block font-bold">80%</p>
                </div>
              </div>
              <div className="min-w-1/4 text-xs md:text-sm flex flex-col items-baseline gap-4">
                <div className="flex items-center gap-2">
                  <Check height={22} width={22} color="#10B981" />
                  <p>Country/Region is UK</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check height={22} width={22} color="#10B981" />

                  <p>Job title is Manager</p>
                </div>

                <div className="flex items-center gap-2">
                  <Check height={22} width={22} color="#10B981" />
                  <p>Returing Opp</p>
                </div>

                <div className="flex items-center gap-2">
                  <X height={22} width={22} color="#B91C1C" />
                  <p>Est. close date is less than 10 days</p>
                </div>

                <div className="flex items-center gap-2">
                  <Check height={22} width={22} color="#10B981" />
                  <p>Acception Demo meeting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
