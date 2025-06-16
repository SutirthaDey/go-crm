import { epilogue } from "@/ui/fonts";
import { DollarSign } from "lucide-react";
import React from "react";

const EstRevenue: React.FC = () => {
  return (
    <>
      <div className="mt-4">
        <div className="bg-[#FE8C81FF] h-12 w-12 flex justify-center items-center rounded-full">
          <DollarSign color="#FFFFFFFF" height={24} width={24} />
        </div>
      </div>

      <div className="flex flex-col ml-4 justify-center  gap-4">
        <p
          className={`${epilogue.className} antialiased text-[32px] leading-12 font-[600] text-[#FE8C81FF]`}
        >
          $20K
        </p>
        <p className="text-[#323842FF] text-sm font-bold leading-6">
          Est. revenue
        </p>
      </div>
    </>
  );
};

export default EstRevenue;
