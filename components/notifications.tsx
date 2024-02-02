"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Inbox } from "lucide-react";
import { IoNotificationsOutline } from "react-icons/io5";

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="border rounded-full p-1 flex items-center justify-center hover:bg-primary/10">
          <IoNotificationsOutline className="h-6 w-6 hover:text-primary cursor-pointer text-slate-700" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="lg:min-w-48 lg:min-h-60 flex flex-col items-center justify-center gap-2"
      >
        <Inbox />
        <p className="text-sm">No new notifications</p>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
