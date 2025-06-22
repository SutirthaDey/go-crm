import { epilogue } from "@/ui/fonts";
import {
  AtSign,
  Banknote,
  Building2,
  CreditCard,
  DollarSign,
  ExternalLink,
  Phone,
  ReceiptText,
  ShoppingCart,
  Tag,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Summary = () => {
  return (
    <div className="flex flex-wrap flex-col w-full md:flex-no-wrap md:w-1/2 border-2 rounded-sm border-gray-100">
      <div
        className={`${epilogue.className} w-full p-6 font-bold text-2xl leading-5 tex-[#171A1FFF] mt-2`}
      >
        General Info
      </div>
      <div className="w-full flex justify-between p-6">
        <div className="flex items-center gap-2">
          <ReceiptText className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">
            Lead code
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#FDF2F2FF] text-[#DE3B40FF] px-2 py-1 flex justify-center rounded-xl hover:bg-[#F5C4C6FF]">
            <p className="text-xs">Returning</p>
          </div>
          <div className="text-[#171A1FFF] text-sm">#1</div>
        </div>
      </div>
      <div className="w-full flex justify-between p-5">
        <div className="flex items-center gap-2">
          <Tag className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">
            Product
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#171A1FFF] text-sm">Sample Business</div>
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <Users className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">
            Client
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#171A1FFF] text-sm">Mrs. Kroger</div>
          <ExternalLink className="text-[#4B7BECFF]" width={16} height={16} />
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <Building2 className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">
            Company
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#171A1FFF] text-sm">AppVibes</div>
          <ExternalLink className="text-[#4B7BECFF]" width={16} height={16} />
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <Phone className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">Phone</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#4B7BECFF] text-sm">(123) 456-7891</div>
        </div>
      </div>{" "}
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <AtSign className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">Email</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#4B7BECFF] text-sm">mail@domain.com</div>
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <CreditCard className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">
            Payment Method
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#6E7787FF] text-sm">Bank Transfer</div>
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <Banknote className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">
            Currency
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#6E7787FF] text-sm">USD ($)</div>
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">
            Budget
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#6E7787FF] text-sm">$2,0000</div>
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <DollarSign className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">
            Deposit
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#6E7787FF] text-sm">$0</div>
        </div>
      </div>
      <div className="w-full flex justify-between p-4">
        <div className="flex items-center gap-2">
          <User className="text-[#4B7BECFF]" width={20} height={20} />
          <p className="font-[400] leading-6 text-sm text-[#6E7787FF]">PIC</p>
        </div>
        <div className="flex items-center">
          <div className="bg-[#F5CDF5FF] rounded-full overflow-hidden">
            <Image src="/I1.jpg" alt="profile image" width={22} height={22} />
          </div>
          <div className="bg-[#F5CDF5FF] rounded-full overflow-hidden">
            <Image src="/H1.jpg" alt="profile image" width={22} height={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
