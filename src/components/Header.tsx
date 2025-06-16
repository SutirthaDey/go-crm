import { Bell, MessageSquareText, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="h-full w-full flex justify-end">
      <div className="h-full flex gap-8 items-center mr-10">
        <Phone height={24} width={24} color="#323842FF" />
        <MessageSquareText height={24} width={24} color="#323842FF" />
        <Bell height={24} width={24} color="#323842FF" />
        <div className="bg-[#C8D6F9FF] rounded-full overflow-hidden">
          <Image src="/avatar.jpg" alt="profile image" width={36} height={36} />
        </div>
      </div>
    </div>
  );
};

export default Header;
