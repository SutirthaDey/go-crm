import Image from "next/image";
import React from "react";
import { epilogue } from "@/ui/fonts";
import {
  ClipboardList,
  DollarSign,
  LayoutPanelLeftIcon,
  ReceiptText,
  Settings,
  Users,
} from "lucide-react";
import clsx from "clsx";

const Sidebar: React.FC = () => {
  const active: boolean = true;
  return (
    <div className="flex flex-col gap-10 border-1 border-solid border-white bg-[#FAFAFBFF] h-full w-full shadow-md shadow-black/20 px-6 py-6">
      <div className="flex gap-2">
        <Image
          src="/project-icon.svg"
          alt="project-logo"
          width={48}
          height={48}
        />
        <div>
          <p
            className={`${epilogue.className} antialiased text-lg font-bold text-[#171A1FFF] leading-7`}
          >
            Project Name
          </p>
          <p className="text-xs font-[400] text-[#565E6CFF] leading-5">
            CRM Tool
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 text-sm text-[#565E6CFF] cursor-pointer leading-6 font-[400]">
        <div
          className={clsx(
            "flex gap-3 pl-4 py-2 rounded-sm",
            active ? "bg-[#4B7BECFF] text-[#FFFFFF] font-bold" : null
          )}
        >
          <LayoutPanelLeftIcon />
          <p>Dashboard</p>
        </div>
        <div className="flex gap-3 pl-4 py-2 rounded-sm">
          <DollarSign />
          <p>Leads</p>
        </div>
        <div className="flex gap-3 pl-4 py-2 rounded-sm">
          <Users />
          <p>Clients</p>
        </div>
        <div className="flex gap-3 pl-4 py-2 rounded-sm">
          <ClipboardList />
          <p>Task management</p>
        </div>
        <div className="flex gap-3 pl-4 py-2 rounded-sm">
          <ReceiptText />
          <p>Invoice</p>
        </div>
        <div className="flex gap-3 pl-4 py-2 rounded-sm">
          <Settings />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
