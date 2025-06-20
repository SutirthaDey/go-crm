import { Deal } from "@/types/Deal";
import clsx from "clsx";
import {
  CalendarCheck2,
  CircleDollarSign,
  Ellipsis,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardProps {
  deal: Deal;
}

const Card: React.FC<CardProps> = ({ deal }) => {
  return (
    <div className="w-[90%] min-h-[180px] bg-white rounded-md p-3 cursor-pointer flex flex-col gap-3 hover:bg-blue-50">
      <div className="flex text-[11px] justify-between">
        <div className="flex gap-2 font-[350]">
          <div className="bg-[#F1F8FDFF] text-[#379AE6FF] px-2 py-1 flex justify-center rounded-xl hover:bg-[#ACD5F5FF] ">
            <p>{deal.type}</p>
          </div>
          <div
            className={clsx(
              "bg-[#FDF2F2FF] text-[#DE3B40FF] px-2 py-1 flex justify-center rounded-xl hover:bg-[#F5C4C6FF]",
              deal.tag == "New"
                ? "bg-[#e6f1e6] text-green-700 hover:bg-[#b6cab6]"
                : null
            )}
          >
            <p>{deal.tag}</p>
          </div>
        </div>
        <Ellipsis color={"gray"} />
      </div>
      <p className="text-[#171A1FFF] text-md font-[400] leading-5">
        {deal.title}
      </p>
      <div className="text-gray-500 text-xs flex justify-between">
        <div className="flex items-center gap-2">
          <CircleDollarSign height={14} width={14} />
          <p>Est. revenue</p>
        </div>
        <p>{deal.revenue}</p>
      </div>
      <div className="text-gray-500 text-xs flex items-center gap-2 justify-between">
        <div className="flex gap-2">
          <CalendarCheck2 height={14} width={14} />
          <p>Next Meeting</p>
        </div>

        <div>
          <p className="text-[#DE3B40FF]">{deal.nextMeeting}</p>
        </div>
      </div>
      <div className="text-gray-500 text-xs flex justify-between">
        <div className="flex items-center gap-2">
          <UserRound height={14} width={14} />
          <p>Customer</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-[#F5CDF5FF] rounded-full overflow-hidden">
            <Image
              src={deal.customer.image}
              alt="profile image"
              width={22}
              height={22}
            />
          </div>
          <p className="text-blue-500">{deal.customer.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
