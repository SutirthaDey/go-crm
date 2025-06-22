import { Check, ChevronRight } from "lucide-react";
import React from "react";

const Stages = () => {
  return (
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
  );
};

export default Stages;
