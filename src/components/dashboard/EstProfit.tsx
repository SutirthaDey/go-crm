import { epilogue } from "@/ui/fonts";
import { DollarSign } from "lucide-react";
import React from "react";

const EstProfit: React.FC = () => {
  return (
    <>
      <div className="mt-4">
        <div className="bg-[#4B7BECFF] h-12 w-12 flex justify-center items-center rounded-full">
          <DollarSign color="#FFF9EEFF" height={24} width={24} />
        </div>
      </div>

      <div className="flex flex-col ml-4 justify-center gap-4">
        <p
          className={`${epilogue.className} antialiased text-[32px] leading-12 font-[600] text-[#4B7BECFF]`}
        >
          $10K
        </p>
        <p className="text-[#323842FF] text-sm font-bold leading-6">
          Est. profit
        </p>
      </div>
    </>
  );
};

export default EstProfit;
