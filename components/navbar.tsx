import { Input } from "@/components/ui/input";
import { IoNotificationsOutline } from "react-icons/io5";
import { getGreeting } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-10 top-0 flex items-center justify-between px-8 h-[70px] border-b-2">
      <div>
        <div className="text-xs text-slate-500">{getGreeting()}</div>
        <div className="text-base font-semibold text-slate-600">
          Welcome Back!
        </div>
      </div>
      <div className="flex items-center gap-6 lg:gap-10">
        <div className="lg:min-w-[400px] relative">
          <Input
            type="text"
            placeholder="Search for infrastructure..."
            className="rounded-lg focus:outline-none text-center w-full bg-gray-100"
          />
        </div>
        <IoNotificationsOutline className="text-2xl cursor-pointer text-slate-700" />
        <Image src="/assets/profile.png" alt="profile" width={40} height={40} />
      </div>
    </div>
  );
};

export default Navbar;
