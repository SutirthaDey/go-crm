import { ChevronDown, Funnel, LayoutPanelLeftIcon, List } from "lucide-react";
import { epilogue } from "@/ui/fonts";

export default function Leads() {
  return (
    <div className="h-screen">
      <div className="flex justify-between flex-wrap">
        <p
          className={`${epilogue.className} text-[#171A1FFF] font-bold text-[32px] leading-12`}
        >
          Leads
        </p>
        <div className="flex flex-wrap sm:justify-end gap-4 items-center">
          <button className="bg-[#4B7BECFF] text-white font-[400] rounded-sm text-sm h-9 w-20 py-2 flex justify-evenly hover:bg-[#3067E9FF]">
            <p>+</p>
            <p>New</p>
          </button>
          <input
            placeholder="search"
            className="bg-[#F3F4F6FF] rounded-sm outline-0 h-9 w-[200px] pl-3 pr-6 hover:bg-[#e7e7e8] cursor pointer"
          ></input>
          <div className="bg-[#F3F4F6FF] p-2 text-gray-500 hover:bg-[#DCE6FBFF]">
            <Funnel height={16} width={16} />
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-5">
        <p className=" text-gray-600 font-[400] text-sm leading-6">
          Total leads <span className="text-black font-[500]">{25}</span>
        </p>
        <div className="flex flex-wrap sm:justify-end gap-4 items-center">
          <div className="bg-[#F3F4F6FF] text-[#171A1FFF] rounded-sm outline-0 h-9 w-[160px] pl-2 pr-3 text-sm flex justify-center items-center gap-2 hover:bg-[#e7e7e8] cursor pointer">
            <p>Group by: Stage</p>
            <ChevronDown height={14} width={14} />
          </div>
          <div className="bg-[#F3F4F6FF] p-2 text-[#4B7BECFF] hover:bg-[#DCE6FBFF] rounded-sm">
            <LayoutPanelLeftIcon height={16} width={16} />
          </div>
          <div className="bg-[#F3F4F6FF] p-2 text-gray-600 rounded-sm hover:bg-[#DCE6FBFF]">
            <List height={16} width={16} />
          </div>
        </div>
      </div>
      <div className="bg-pink-50 h-full overflow-auto">C</div>
    </div>
  );
}
