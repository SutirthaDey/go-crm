import { epilogue } from "@/ui/fonts";
import { Handshake } from "lucide-react";
import React from "react";

const NewDeals: React.FC = () => {
  return (
    <>
      <div className="mt-4">
        <div className="bg-[#75AF73FF] h-12 w-12 flex justify-center items-center rounded-full">
          <Handshake color="#FFF9EEFF" height={24} width={24} />
        </div>
      </div>

      <div className="flex flex-col ml-4 justify-center gap-4">
        <p
          className={`${epilogue.className} antialiased text-[32px] leading-12 font-[600] text-[#75AF73FF]`}
        >
          20
        </p>
        <p className="text-[#323842FF] text-sm font-bold leading-6">
          New deals
        </p>
      </div>
    </>
  );
};

export default NewDeals;
