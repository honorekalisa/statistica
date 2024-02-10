import { Menu } from "lucide-react";
import { getGreeting } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import AuthButton from "@/components/ui/auth-button";
import Notifications from "@/components/notifications";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-10 top-0 flex items-center justify-between px-4 h-[70px] border-b-2">
      <div className="hidden md:block">
        <div className="hidden lg:block text-xs text-slate-500">
          {getGreeting()}
        </div>
        <div className="text-sm xl:text-base font-semibold text-slate-600">
          Welcome Back!
        </div>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto gap-6 lg:gap-8">
        <Menu className="text-primary md:hidden" />
        {/* <div className="hidden lg:block lg:min-w-[400px]">
          <Input
            type="text"
            placeholder="Search for infrastructure..."
            className="rounded-lg focus:outline-none text-center w-full bg-gray-100"
          />
        </div> */}
        <Notifications />
        <AuthButton />
      </div>
    </div>
  );
};

export default Navbar;
