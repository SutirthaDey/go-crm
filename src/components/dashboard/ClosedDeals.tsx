import { epilogue } from "@/ui/fonts";
import { Banknote } from "lucide-react";
import React from "react";

const ClosedDeals = () => {
  return (
    <>
      <div className="mt-4">
        <div className="bg-[#FAB740FF] h-12 w-12 flex justify-center items-center rounded-full">
          <Banknote color="#FFF9EEFF" height={28} width={28} />
        </div>
      </div>

      <div className="flex flex-col ml-4 justify-center  gap-4">
        <p
          className={`${epilogue.className} antialiased text-[32px] leading-12 font-[600] text-[#FAB740FF]`}
        >
          $5K
        </p>
        <p className="text-[#323842FF] text-sm font-bold leading-6">
          9 closed deals
        </p>
      </div>
    </>
  );
};

export default ClosedDeals;
