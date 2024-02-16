import { MailCheck } from "lucide-react";
import { Button } from "./ui/button";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-primary">
        Coming soon...
      </h1>
      <p className="text-sm px-4 md:px-0 text-center">This page is under construction, subscribe to be notified</p>
      <Button className="text-white shadow">
        <MailCheck className="mr-2 h-4 w-4" />
        Subscribe
      </Button>
    </div>
  );
};

export default ComingSoon;
