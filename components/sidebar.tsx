"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AreaChart,
  LogOut,
} from "lucide-react";
import { MdOutlineElectricBolt, MdSpaceDashboard } from "react-icons/md";
import { FaTowerBroadcast } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import { cn } from "@/lib/utils";
import ThoughtsTip from "@/components/ui/dailyTip";

const Sidebar = () => {
  const pathname = usePathname();
  const links = [
    {
      link: "/",
      icon: <MdSpaceDashboard className="h-4 w-4" />,
      text: "Overview",
    },
    {
      link: "/education",
      icon: <IoSchoolSharp className="h-4 w-4" />,
      text: "Education",
    },
    {
      link: "/transport",
      icon: <FaRoad className="h-4 w-4" />,
      text: "Transport",
    },
    {
      link: "/communication",
      icon: <FaTowerBroadcast className="h-4 w-4" />,
      text: "Communication",
    },
    {
      link: "/energy",
      icon: <MdOutlineElectricBolt className="h-4 w-4" />,
      text: "Water & Energy",
    },
  ];
  return (
    <div className="border-r text-slate-700 text-sm h-screen p-4 sticky left-0 inset-y-0">
      <div className="flex justify-start gap-3 mb-6">
        <Link href="/" className="cursor-pointer">
          <p className="text-primary text-left font-bold text-xl">Statistica</p>
        </Link>
        <AreaChart className="text-primary" />
      </div>
      <div className="space-y-1 whitespace-nowrap">
        {links.map((link) => (
          <Link
            href={link.link}
            key={link.text}
            className={cn(
              "flex items-center gap-4 rounded-md hover:bg-primary/10 hover:text-primary py-3 px-6 cursor-pointer w-full",
              pathname === link.link && "bg-primary/10 text-primary"
            )}
          >
            {link.icon}
            <span
              className={cn(
                "text-sm font-medium",
                pathname === link.link && "font-semibold"
              )}
            >
              {link.text}
            </span>
          </Link>
        ))}
        <div className="pt-8">
          <ThoughtsTip />
        </div>
      </div>
      <div className="absolute bottom-2">
        <button
          onClick={() => {}}
          className="flex items-center gap-4 w-full font-medium rounded-md hover:bg-primary/10 hover:text-primary py-3 px-6 cursor-pointer"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
