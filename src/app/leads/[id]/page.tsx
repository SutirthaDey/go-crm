"use client";

import { epilogue } from "@/ui/fonts";
import {
  Ban,
  Check,
  ChevronRight,
  CircleCheckBig,
  EllipsisVertical,
} from "lucide-react";

export default function LeadDetails() {
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

      <div className="h-20 mt-2 p-4 border-1 border-solid border-gray-100 flex items-center overflow-auto">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-7 min-w-7 bg-[#1DD75BFF] rounded-full text-white flex justify-center items-center">
              <Check height={18} width={18} />
            </div>
            <p className="text-[#171A1FFF] text-sm">New Lead</p>
          </div>
          <ChevronRight height={16} width={16} color="gray" />
          <div className="flex items-center gap-2">
            <div className="h-7 min-w-7 bg-[#1DD75BFF] rounded-full text-white flex justify-center items-center">
              <Check height={18} width={18} />
            </div>
            <p className="text-[#171A1FFF] text-sm">Proposal</p>
          </div>
          <ChevronRight height={16} width={16} color="gray" />

          <div className="flex items-center gap-2">
            <div className="h-7 min-w-7 bg-[#4B7BECFF] rounded-full text-white flex justify-center items-center">
              3
            </div>
            <p className="text-[#171A1FFF] text-sm">Negotiation</p>
          </div>
          <ChevronRight height={16} width={16} color="gray" />

          <div className="flex items-center gap-2">
            <div className="h-7 min-w-7 bg-[#F3F4F6FF] text-[#565E6CFF] rounded-full flex justify-center items-center">
              4
            </div>
            <p className="text-[#565E6CFF] text-sm">Contract Sent</p>
          </div>
          <ChevronRight height={16} width={16} color="gray" />
          <div className="flex items-center gap-2">
            <div className="h-7 min-w-7 bg-[#F3F4F6FF] text-[#565E6CFF] rounded-full flex justify-center items-center">
              5
            </div>
            <p className="text-[#565E6CFF] text-sm">Close</p>
          </div>
        </div>
      </div>

      <div className="min-h-22 mt-4 p-6 bg-amber-50 flex items-center gap-6 flex-wrap">
        <div className="flex gap-2 text-[#171A1FFF] text-sm flex-col min-w-48">
          <p className="font-[350]">Title</p>
          <p className="font-[600]">Sint Proident adipisicing</p>
        </div>
        <div className="flex gap-2 text-[#171A1FFF] text-sm flex-col min-w-48">
          <p className="font-[350]">Est Revenue</p>
          <p className="font-[600]">$2,000</p>
        </div>
        <div className="flex gap-2 text-[#171A1FFF] text-sm flex-col min-w-48">
          <p className="font-[350]">Product</p>
          <p className="font-[600]">100 Licences</p>
        </div>
        <div className="flex gap-2 text-[#171A1FFF] text-sm flex-col min-w-48">
          <p className="font-[350]">Est. Close Date</p>
          <p className="font-[600]">Oct 10, 2025</p>
        </div>
      </div>
    </div>
  );
}
