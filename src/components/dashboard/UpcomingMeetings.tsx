import { epilogue } from "@/ui/fonts";
import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const UpcomingMeetings: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-6 p-6">
      <p
        className={`${epilogue.className} text-2xl leading-6 font-bold text-[#171A1FFF]`}
      >
        Meetings today
      </p>
      <div className="bg-[#F1F5FEFF] border-1 border-solid border-[#4B7BECFF] rounded-lg p-4 flex gap-20 ml-4 cursor-pointer hover:bg-[#d9dee9] justify-between">
        <div>
          <div className="bg-[#DE3B40FF] text-white w-[72px] h-8 text-xs flex justify-center items-center leading-5 font-medium rounded-2xl mb-2">
            In 10 mins
          </div>
          <p className="font-[700] text-[#171A1FFF] text-sm">
            Internal perparation meeting
          </p>
          <div className="text-[#6E7787FF] font-[400] text-xs flex items-center gap-2 mt-1">
            <Clock className="inline" height={16} width={16} />
            <p>08:00 - 09:00 AM</p>
          </div>
        </div>
        <div className="flex flex-col justify-end py-2">
          <div className="flex">
            <div className="bg-[#F5CDF5FF] rounded-full overflow-hidden">
              <Image src="/H1.jpg" alt="profile image" width={30} height={30} />
            </div>
            <div className="bg-[#C8D6F9FF] rounded-full overflow-hidden">
              <Image src="/B1.jpg" alt="profile image" width={30} height={30} />
            </div>
            <div className="bg-[#F5CDF5FF] rounded-full overflow-hidden">
              <Image src="/E1.jpg" alt="profile image" width={30} height={30} />
            </div>
            <div className="bg-[#C8D6F9FF] rounded-full overflow-hidden">
              <Image src="/I1.jpg" alt="profile image" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF9EEFF] rounded-lg p-4 flex gap-20 ml-4 cursor-pointer hover:bg-[#ece8df] justify-between">
        <div>
          <p className="font-[700] text-[#171A1FFF] text-sm">
            Internal perparation meeting
          </p>
          <div className="text-[#6E7787FF] font-[400] text-xs flex items-center gap-2 mt-1">
            <Clock className="inline" height={16} width={16} />
            <p>03:00 - 04:00 PM</p>
          </div>
        </div>
        <div className="flex flex-col justify-end py-2">
          <div className="flex">
            <div className="bg-[#F5CDF5FF] rounded-full overflow-hidden">
              <Image src="/E1.jpg" alt="profile image" width={30} height={30} />
            </div>
            <div className="bg-[#C8D6F9FF] rounded-full overflow-hidden">
              <Image src="/I1.jpg" alt="profile image" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F9F5FF] rounded-lg p-4 flex gap-20 ml-4 hover:bg-[#e5eae5] cursor-pointer justify-between">
        <div>
          <p className="font-[700] text-[#171A1FFF] text-sm">
            External perparation - Negotiation
          </p>
          <div className="text-[#6E7787FF] font-[400] text-xs flex items-center gap-2 mt-1">
            <Clock className="inline" height={16} width={16} />
            <p>04:00 - 05:00 PM</p>
          </div>
        </div>
        <div className="flex flex-col justify-end py-2">
          <div className="flex">
            <div className="bg-[#F5F9F5FF] rounded-full overflow-hidden">
              <Image src="/H1.jpg" alt="profile image" width={30} height={30} />
            </div>
            <div className="bg-[#C8D6F9FF] rounded-full overflow-hidden">
              <Image src="/B1.jpg" alt="profile image" width={30} height={30} />
            </div>
            <div className="bg-[#F5CDF5FF] rounded-full overflow-hidden">
              <Image src="/E1.jpg" alt="profile image" width={30} height={30} />
            </div>
            <div className="bg-[#C8D6F9FF] rounded-full overflow-hidden">
              <Image src="/I1.jpg" alt="profile image" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetings;
