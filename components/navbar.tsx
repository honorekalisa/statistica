"use client";

import { Menu } from "lucide-react";
import { getGreeting } from "@/lib/utils";
import AuthButton from "@/components/ui/auth-button";
import Notifications from "@/components/notifications";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  
  return (
    <div className="bg-white sticky z-10 top-0 flex items-center justify-between px-4 h-[70px] border-b-2">
      <div className="hidden lg:block">
        <div className="hidden lg:block text-xs text-slate-500">
          {getGreeting()}
        </div>
        <div className="text-sm xl:text-base font-semibold text-slate-600">
          Welcome Back!
        </div>
      </div>
      <div className="flex items-center justify-between w-full lg:w-auto gap-6 lg:gap-8">
        <MobileNav />
        <Notifications />
        <AuthButton />
      </div>
    </div>
  );
};

export default Navbar;
