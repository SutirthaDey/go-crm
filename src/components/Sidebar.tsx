"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  ClipboardList,
  DollarSign,
  LayoutPanelLeftIcon,
  ReceiptText,
  Settings,
  Users,
} from "lucide-react";
import { epilogue } from "@/ui/fonts";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <LayoutPanelLeftIcon /> },
    { href: "/leads", label: "Leads", icon: <DollarSign /> },
    { href: "/clients", label: "Clients", icon: <Users /> },
    {
      href: "/task-management",
      label: "Task Management",
      icon: <ClipboardList />,
    },
    { href: "/invoices", label: "Invoice", icon: <ReceiptText /> },
    { href: "/settings", label: "Settings", icon: <Settings /> },
  ];

  return (
    <div className="flex flex-col gap-10 border-1 border-solid border-white bg-[#FAFAFBFF] h-full w-full shadow-md shadow-black/20 px-6 py-6">
      {/* Logo and Project Name */}
      <div className="flex gap-2">
        <Image
          src="/project-icon.svg"
          alt="project-logo"
          width={48}
          height={48}
        />
        <div>
          <Link
            className={`${epilogue.className} antialiased text-lg font-bold text-[#171A1FFF] leading-7`}
            href="/dashboard"
          >
            Project Go-CRM
          </Link>
          <p className="text-xs font-[400] text-[#565E6CFF] leading-5">
            CRM Tool
          </p>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-7 text-sm text-[#565E6CFF] cursor-pointer leading-6 font-[400]">
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/"); // include nested routes

          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex gap-3 pl-4 py-2 rounded-sm items-center",
                isActive ? "bg-[#4B7BECFF] text-white font-bold" : ""
              )}
            >
              {icon}
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
